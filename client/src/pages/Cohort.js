import { useState, useEffect } from "react";
import { Milestones } from "../component/Milestones";

export const Cohort = () => {
    const [cohortsData, setCohortsData] = useState([]);

    useEffect(() => {
        const fetchAllCohorts = async () => {

            try {
                const response = await fetch("/api/cohorts");
                const data = await response.json();
                if (response.status === 200) {
                    setCohortsData(data.cohorts);
                } else {
                    throw new Error("Failed to fetch cohorts");
                }
            } catch (error) {
                console.error("Error fetching cohorts:", error);
            }
        };
        fetchAllCohorts();
    }, []);
    console.log(cohortsData);
    return (
        <div>
            <Milestones cohortData = {cohortsData} />
        </div>
    );
};