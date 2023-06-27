import "./User.css";
import { useContext } from "react";
import { Search } from "../component/Search";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

export const User = () => {
	const { setUserName } = useContext(AppContext);

	const handleInputChange = (event) => {
		setUserName(event.target.value);
	};

	return (
		<div className="user-container">
			<label htmlFor="username">Your GitHub User Name</label>
			<input
				className="user-input"
				type="text"
				id="username"
				onChange={handleInputChange}
			/>
			<Link to="/result">
				<Search />
			</Link>
		</div>
	);
};
