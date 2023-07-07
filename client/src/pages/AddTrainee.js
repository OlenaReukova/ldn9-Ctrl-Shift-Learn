import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/Button";
import { InputeField } from "../component/InputeField";
import "../pages/addTrainee.css";

export const AddTrainee = () => {
	const [fullname, setFullName] = useState("");
	const [githubUserName, setGithubUserName] = useState("");
	const [cohortId, setCohortId] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/trainees", {
				method: "POST",
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
				throw new Error("couldn't to add trainee");
			}

			navigate("/admin/cohorts/:id/addtrainee");
		} catch (error) {
			console.error("Error adding trainee:", error);
		}
	};

	return (
		<div className="addTrainee">
			<h1>Add Trainee to the related Cohort</h1>
			<form onSubmit={handleSubmit}>
				<InputeField
					id={"github_user_name"}
					placeholder={"Github User Name"}
					label={"Github User Name"}
					type={"text"}
					value={githubUserName}
					onChange={(e) => setGithubUserName(e.target.value)}
				/>
				<InputeField
					id={"full_name"}
					placeholder={"Full Name "}
					label={"Full Name "}
					type={"text"}
					value={fullname}
					onChange={(e) => setFullName(e.target.value)}
				/>

				<InputeField
					id={"cohort_id"}
					placeholder={"cohort Id "}
					label={"cohort Id"}
					type={"number"}
					value={cohortId}
					onChange={(e) => setCohortId(e.target.value)}
				/>
				<Button title={"Submit"} />
			</form>
		</div>
	);
};

