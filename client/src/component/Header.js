import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
	return (
		<header>
			<Link to={"/"}>
				<img
					className="logo"
					src="https://syllabus.codeyourfuture.io/img/logo.png"
					alt="CYF"
				/>
			</Link>
			<p className="topic">
				<span className="cyf">CYF</span>{" "}
				<span className="progress">progress tracker</span>
			</p>
			<p className="team-name">Ctrl + Shift + Learn</p>
		</header>
	);
};
