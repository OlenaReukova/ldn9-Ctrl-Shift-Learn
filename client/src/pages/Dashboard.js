import { useEffect, useState, useContext,useMemo } from "react";
import { AppContext } from "../AppContext";
import { DashboardHero } from "../component/DashboardHero";
import { CodeWarsCard } from "../component/CodeWarsCard";
import { PullRequestCard } from "../component/PullRequestCard";
import milestoneDetails from "./../../data/milestones.json";

export const Dashboard = () => {
  const { userName } = useContext(AppContext);
  const [cohortData, setCohortData] = useState({});
  const [currentMilestoneName, setCurrentMilestoneName] = useState("");
  const [nextMilestoneName, setNextMilestoneName] = useState("");


  useEffect(() => {
    const fetchCohortData = async () => {
      try {
        const res = await fetch(`/api/trainees/search/${userName}`);
        if (!res.ok) {
          throw new Error("Couldn't fetch cohort's data");
        }
        const data = await res.json();
        setCohortData(data.milestoneData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCohortData();
  }, [userName]);
  const { start, html_css, js1_week2, js2_week1, js3_week3, react_week2, node_week2, db_week3, fp_week2 } = cohortData;
  const cohortMilestoneDeadlines = useMemo(() => (
    { start, html_css, js1_week2, js2_week1, js3_week3, react_week2, node_week2, db_week3, fp_week2 }), [start, html_css, js1_week2, js2_week1, js3_week3, react_week2, node_week2, db_week3, fp_week2]);



  useEffect(() => {
    let indexOfNextMilestone = 0;
    const cohortMilestoneDeadlinesArray = Object.entries(cohortMilestoneDeadlines);
    indexOfNextMilestone = cohortMilestoneDeadlinesArray.findIndex(([, value]) => {
      const currentDate = new Date().getTime();
      const timestampForValue = new Date(value).getTime();
      return currentDate <= timestampForValue;
    });

    if (indexOfNextMilestone !== -1) {
      const [currentMilestoneName] = cohortMilestoneDeadlinesArray[indexOfNextMilestone - 1];
      const [nextMilestoneName] = cohortMilestoneDeadlinesArray[indexOfNextMilestone];

      setCurrentMilestoneName(currentMilestoneName);
      setNextMilestoneName(nextMilestoneName);

    } else {
      console.log("loading...");
    }
  }, [cohortMilestoneDeadlines]);
  console.lo;
  if (currentMilestoneName && nextMilestoneName) {
    return (
      <div className="dashboard">
        <p>{currentMilestoneName}</p>
        <DashboardHero
        />
        <PullRequestCard data={{
            pulls: milestoneDetails[nextMilestoneName].pulls,
            codewars: milestoneDetails[nextMilestoneName].codewars,
            name: nextMilestoneName,
            deadline: cohortMilestoneDeadlines[nextMilestoneName],
          }} />
        <CodeWarsCard />
      </div>
    );
  }

};