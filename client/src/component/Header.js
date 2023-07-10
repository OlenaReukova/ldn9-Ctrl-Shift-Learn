import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
	const location = useLocation();
	const adminPages = location.pathname.startsWith("/admin");
	const home = location.pathname === "/";
	const about = location.pathname === "/about";
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

			<ul className="navbar">
				{!home && (
					<li>
						<Link className="link" to="/">
							Home
						</Link>
					</li>
				)}
				{adminPages && (
					<>
						{!isCohortsPage && (
							<li>
								<Link className="link" to="/admin/cohorts">
								</Link>
							</li>
						)}
						{isCohortsPage && (
							<li>
								<Link className="link" to="/admin/cohorts/addcohort">
									Add New Cohort
								</Link>
							</li>
						)}
						{!isCohortsPage && isCohortDetailsPage && (
							<li>
								<Link className="link" to="/admin/cohorts/:id/addtrainee">
									Add New Trainee
								</Link>
							</li>
						)}
					</>
				)}
				{!about && (
					<li>
						<Link className="link" to="/about">
							About
						</Link>
					</li>
				)}
			</ul>
		</header>
	);
};
