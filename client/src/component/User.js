import React, { useState } from "react";
import "./User.css";


export function User() {

	const [name, setName] = useState("");

	const handleInputChange = (event) => {
		setName(event.target.value);
	};

	// const handleSearch = () => {
	//   // Perform the search logic here using the "name" value
	//   // You can make an API call or search the data locally

	//   // Example: Logging the name value
	//   console.log(`Searching for: ${name}`);
	// };

	return (
<div className="user-container">
	<input className="user-input" type="text" value ={name} onChange={handleInputChange} placeholder="Enter your full name" />
	<br />
	<button className="user-button">Search</button>
</div>
	);
}
export default User;