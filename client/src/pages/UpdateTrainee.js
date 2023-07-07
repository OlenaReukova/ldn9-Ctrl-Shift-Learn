import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/Button";
import "../pages/addTrainee.css";

export const UpdateTrainee = () => {
	const [fullname, setFullName] = useState("");
	const [githubUserName, setGithubUserName] = useState("");
	const [cohortId, setCohortId] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/trainees/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					github_user_name: githubUserName,
					full_name: fullname,
					cohort_id: cohortId,
				}),
			});

			if (!response.ok) {
				throw new Error("couldn't to update trainee");
			}

			navigate(-1);
		} catch (error) {
			console.error("Error updating trainee:", error);
		}
	};

	return (
		<div className="addTrainee">
			<h1>Update Trainee's details</h1>
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
				<label htmlFor="cohortId">Cohort Id </label>
				<input
					type="number"
					placeholder="cohort Id"
					value={cohortId}
					onChange={(e) => setCohortId(e.target.value)}
				/>
				<Button title={"Update"} />
			</form>
		</div>
	);
};
