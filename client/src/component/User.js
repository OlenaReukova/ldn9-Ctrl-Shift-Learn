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
			<div style={{ display: "flex" }}>
				<h1> Want to check your progress? Amazing! </h1>
				<span>🌟</span>
			</div>

			<div className="user-container">
				<label htmlFor="username">Enter Your GitHub User Name</label>
				<input
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
