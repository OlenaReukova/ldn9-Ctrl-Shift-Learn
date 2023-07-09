import { useEffect, useState, useContext } from "react";
import { AppContext } from "../AppContext";

export const Milestone = () => {
	const { userName } = useContext(AppContext);
	const [currentMilestone, setCurrentMilestone] = useState(null);
	const [cohortData, setCohortData] = useState({});

	useEffect(() => {
		const fetchCohortData = async () => {
			try {
				const res = await fetch(`/api/trainees/search/${userName}`);
				if (!res.ok) {
					throw new Error("Couldn't fetch cohort's data");
				}
				const data = await res.json();
				console.log(data);
				setCohortData(data.milestoneData);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchCohortData();
	}, [userName]);

	const { start, html_css, js1_week2, js2_week1, js3_week3, react_week2, node_week2, db_week3, fp_week2 } = cohortData;
	const newObject = { start, html_css, js1_week2, js2_week1, js3_week3, react_week2, node_week2, db_week3, fp_week2 };


	useEffect(() => {
		const getMilestone = () => {
			const currentDate = new Date().getTime();

			Object.entries(newObject).forEach(([key, value]) => {
				let newValue = new Date(value).getTime();

				let difference = currentDate - newValue;
				console.log("diff", difference);
				if (difference < 0) {
					console.log(currentMilestone);
					return currentMilestone;
				}
				if (difference > 0) {
					setCurrentMilestone(key);
				}
			});
		};

		getMilestone();
	}, [newObject, currentMilestone]);
};