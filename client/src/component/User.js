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
		<div className="user-container">
			<h1>Want to check your progress? Amazing! </h1>

			<div className="user-form">
				<label htmlFor="username" className="form-label">Enter Your GitHub User Name</label>
				<input
					className="form-input"
					type="text"
					id="username"
					onChange={handleInputChange}
				/>
			</div>
			<Search />
		</div>
	);
};
