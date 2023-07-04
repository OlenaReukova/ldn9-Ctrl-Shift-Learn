import { Link } from "react-router-dom";
import { Button } from "../component/Button";
import { CohortsTable } from "../component/CohortsTable";

export const Cohorts = () => {
	return (
		<main>
			<CohortsTable />
			<Link to="/admin/cohorts/addcohort">
				<Button title="Add New Cohort" />
			</Link>
		</main>
	);
};
