import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../pages/getCohortById.css";
export const GetCohortById = () => {
	const [trainees, setTrainees] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const fetchCohortData = async () => {
			try {
				const res = await fetch(`/api/cohorts/${id}`);
				if (!res.ok) {
					throw new Error("couldn't fetch cohort's data");
				}
				const data = await res.json();
				console.log("data", data);
				setTrainees(data["All Trainees"]);
			} catch (error) {
				console.error("Error", error);
			}
		};
		fetchCohortData();
	}, [id]);

	return (
		<div className="getCohortById">
			{trainees.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Full Name</th>
							<th>Github User Name</th>
							<th>Pull Requestes</th>
							<th>Codewars</th>
						</tr>
					</thead>
					<tbody>
						{trainees.map((trainee) => (
							<tr key={trainee.id}>
								<td>{trainee.full_name}</td>
								<td>{trainee.github_user_name}</td>
								<td>25 out of 26</td>
								<td> 5ku</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No one enrolled yet ...</p>
			)}
			<Link className="link" to={`/admin/cohorts/${id}/addtrainee`}>
				Add New Trainee
			</Link>
		</div>
	);
};
