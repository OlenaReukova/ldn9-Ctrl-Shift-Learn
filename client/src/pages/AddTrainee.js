import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/Button";
import "../pages/addTrainee.css";
export const AddTrainee = () => {
	const [fullname, setFullName] = useState("");
	const [githubUserName, setGithubUserName] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/cohorts/{cohortId}/trainees", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					full_name: fullname,
					github_user_name: githubUserName,
				}),
			});

			if (!response.ok) {
				throw new Error("couldn't to add trainee");
			}

			navigate("/admin/cohorts/:id/addtrainee");
		} catch (error) {
			console.error("Error adding trainee:", error);
		}
	};

	return (
		<div className="addTrainee">
			<h2>Add Trainee to the related Cohort</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="githubUsername">Github User Name </label>
				<input
					type="text"
					placeholder="Github User Name"
					value={githubUserName}
					onChange={(e) => setGithubUserName(e.target.value)}
				/>
				<label htmlFor="fullName">Full Name </label>
				<input
					type="text"
					placeholder="Full Name"
					value={fullname}
					onChange={(e) => setFullName(e.target.value)}
				/>
				<Button title={"Submit"} />
			</form>
		</div>
	);
};
