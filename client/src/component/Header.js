import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
	const location = useLocation();
	const isCohortsPage =
		location.pathname === "/admin/cohorts" ||
		location.pathname === "/admin/cohorts/";

	const isCohortDetailsPage =
		!location.pathname.includes("addcohort") &&
		!location.pathname.includes("updateTrainee") &&
		!location.pathname.includes("addtrainee");

	return (
		<header>
			<img
				className="logo"
				src="https://syllabus.codeyourfuture.io/img/logo.png"
				alt="CYF"
			/>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{!isCohortsPage && (
					<li>
						<Link to="/admin/cohorts">Cohorts </Link>
					</li>
				)}
				{isCohortsPage && (
					<li>
						<Link to="/admin/cohorts/addcohort">Add New Cohort</Link>
					</li>
				)}
				{!isCohortsPage && isCohortDetailsPage && (
					<li>
						<Link to="/admin/cohorts/:id/addtrainee">Add New Trainee</Link>
					</li>
				)}
				<li>About</li>
			</ul>
		</header>
	);
};
