import "./header.css";

export const Header = () => {
	return (
		<header>
			<img
				className="logo"
				src="https://syllabus.codeyourfuture.io/img/logo.png"
				alt="CYF"
			/>
			<p className="topic">
				<span className="cyf">CYF</span>{" "}
				<span
					className="progress">
					progress tracker
				</span>
			</p>
			<p className="team-name">Ctrl + Shift + Learn</p>
		</header>
	);
};
