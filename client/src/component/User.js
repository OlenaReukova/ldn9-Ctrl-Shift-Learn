import React, { useState } from "react";
import "./User.css";

export function User() {
	const [name, setName] = useState("");

	const handleInputChange = (event) => {
		setName(event.target.value);
	};

	return (
		<div className="user-container">
			<label htmlFor="username">Your GitHub User Name</label>
			<input
				className="user-input"
				type="text"
				id="username"
				value={name}
				onChange={handleInputChange}
			/>
			<button className="user-button">Search</button>
		</div>
	);
}
export default User;
