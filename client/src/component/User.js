import "./User.css";
import { useContext } from "react";
import { Search } from "../component/Search";
import { AppContext } from "../AppContext";

export const User = () => {
	const { setUserName } = useContext(AppContext);

	const handleInputChange = (event) => {
		setUserName(event.target.value);
	};

	return (
		<div>
			<h1>Track your pull requests and Codewars rank </h1>

			<div className="user-container">
				<label htmlFor="username">Your GitHub User Name</label>
				<input
				placeholder="Enter your Github User Name ... "
					className="user-input"
					type="text"
					id="username"
					onChange={handleInputChange}
				/>
				<div>
				<Search />
			</div>
			</div>
		</div>
	);
};
