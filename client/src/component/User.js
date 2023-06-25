import React, { useState } from "react";
import "./User.css";
import { Search } from "../component/Search";

export const User = () => {
  const [userName, setUserName] = useState("");

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
        value={userName}
        onChange={handleInputChange}
      />
      <Search userName={userName} />
    </div>
  );
};
