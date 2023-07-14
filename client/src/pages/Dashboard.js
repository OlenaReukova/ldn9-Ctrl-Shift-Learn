import { useEffect, useState, useContext, useMemo } from "react";
import { AppContext } from "../AppContext";
import { DashboardHero } from "../component/DashboardHero";
import { MilestoneCard } from "../component/MilestoneCard";
import milestoneDetails from "./../../data/milestones.json";
import { mandatoryCourswork } from "../../data/mandatoryCoursework";
import "./dashboard.css";

export const Dashboard = () => {
	const { userName, githubData, codewarsData } = useContext(AppContext);
	const [cohortData, setCohortData] = useState({});
	const [previousMilestoneName, setCurrentMilestoneName] = useState("");
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
	const filteredPulls = githubData.items?.filter((pull) => {
		const repoName = pull.url
			.replace("https://api.github.com/repos/CodeYourFuture/", "")
			.split("/")[0]
			.toLowerCase();
		return mandatoryCourswork
			.map((item) => item.toLowerCase())
			.includes(repoName);
	});
	console.log(codewarsData);
	const {
		start,
		html_css,
		js1_week2,
		js2_week1,
		js3_week3,
		react_week2,
		node_week2,
		db_week3,
		fp_week2,
	} = cohortData;
	const cohortMilestoneDeadlines = useMemo(
		() => ({
			start,
			html_css,
			js1_week2,
			js2_week1,
			js3_week3,
			react_week2,
			node_week2,
			db_week3,
			fp_week2,
		}),
		[
			start,
			html_css,
			js1_week2,
			js2_week1,
			js3_week3,
			react_week2,
			node_week2,
			db_week3,
			fp_week2,
		]
	);
	useEffect(() => {
		let indexOfNextMilestone = 0;
		const cohortMilestoneDeadlinesArray = Object.entries(
			cohortMilestoneDeadlines
		);
		indexOfNextMilestone = cohortMilestoneDeadlinesArray.findIndex(
			([, value]) => {
				const currentDate = new Date().getTime();
				const timestampForValue = new Date(value).getTime();
				return currentDate <= timestampForValue;
			}
		);
		if (indexOfNextMilestone !== -1) {
			const [previousMilestoneName] =
				cohortMilestoneDeadlinesArray[indexOfNextMilestone - 1];
			const [nextMilestoneName] =
				cohortMilestoneDeadlinesArray[indexOfNextMilestone];
			setCurrentMilestoneName(previousMilestoneName);
			setNextMilestoneName(nextMilestoneName);
		} else {
			console.log("loading...");
		}
	}, [cohortMilestoneDeadlines]);

	const getData = (value) => {
		let localDate = new Date(cohortMilestoneDeadlines[value]).toLocaleDateString();
		return {
			targetPulls: milestoneDetails[value].pulls,
			targetRank: milestoneDetails[value].codewars,
			name: value,
			deadline: localDate,
			achievedPulls: filteredPulls?.length,
			achievedRank: codewarsData.ranks?.overall.rank * -1,
			achievedScore: codewarsData.ranks?.languages
				?.javascript.score,
		};
	};
	return (
		<div className="dashboard__container">
			{!!filteredPulls?.length && codewarsData.ranks?.overall.name && <DashboardHero
				achievedPulls={filteredPulls?.length}
				achievedRank={codewarsData.ranks?.overall?.name}
			/>}
			{previousMilestoneName && <MilestoneCard
				data={getData(previousMilestoneName)} time="Previous" timeVerb="was"
			/>}
			{nextMilestoneName && <MilestoneCard
				data={getData(nextMilestoneName)} display = "none" time="Next" timeVerb="is" />}
		</div>
	);
};