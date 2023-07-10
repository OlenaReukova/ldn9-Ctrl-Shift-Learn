import { useEffect, useState, useContext } from "react";
import { AppContext } from "../AppContext";
import milestoneDetails from "./../../data/milestones.json";

export const UserData = () => {
	const { userName } = useContext(AppContext);
	const [cohortData, setCohortData] = useState({});
	const [currentMilestoneName, setCurrentMilestoneName] = useState(null);
	const [currentMilestoneData, setCurrentMilestoneData] = useState({
		pulls: 0,
		codewars: 9,
	});

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
	const cohortMilestoneDeadlines = { start, html_css, js1_week2, js2_week1, js3_week3, react_week2, node_week2, db_week3, fp_week2 };


	useEffect(() => {
		const getMilestone = () => {
			const currentDate = new Date().getTime();

			Object.entries(cohortMilestoneDeadlines).forEach(([key, value]) => {
				let TimestampForValue = new Date(value).getTime();

				if (currentDate <= TimestampForValue) {
					setCurrentMilestoneData(milestoneDetails[currentMilestoneName]);
					return currentMilestoneName;
				}

				if (currentDate > TimestampForValue) {
					setCurrentMilestoneName(key);
				}
			});
		};

		getMilestone();
	}, [cohortMilestoneDeadlines,currentMilestoneName, currentMilestoneData]);
};