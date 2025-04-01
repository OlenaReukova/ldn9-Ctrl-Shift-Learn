import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Milestones } from "../component/Milestones";
import { Trainees } from "../component/Trainees";

export const Cohort = () => {
	const [milestones, setMilestone] = useState([]);
	const [trainees, setTrainees] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchCohortData = async () => {
			try {
				const res = await fetch(`/api/cohorts/${id}`);
				if (!res.ok) {
					throw new Error("Couldn't fetch cohort's data");
				}
				const data = await res.json();
				setTrainees(data["All Trainees"]);
				setMilestone(data["Milestones"]);
			} catch (error) {
				console.error("Error", error);
			}
		};
		fetchCohortData();
	}, [id]);

	const handleDelete = async () => {
		if (!window.confirm("Are you sure you want to delete this cohort?")) {
			return;
		}

		try {
			const response = await fetch(`/api/cohorts/${id}`, {
				method: "DELETE",
			});

			if (response.ok) {
				alert("Successfully removed cohort");
				navigate("/admin/cohorts");
			} else {
				throw new Error("Failed to delete cohort");
			}
		} catch (error) {
			console.error("Error deleting cohort:", error);
		}
	};

	return (
		<div className="main" style={{ display: "flex", flexDirection: "column" }}>
			<h1>{milestones.name}</h1>
			<Milestones milestones={milestones} />
			<Link className="link" to={`/admin/cohorts/updatecohort/${id}`}>
				<button
					style={{
						backgroundColor: "#FF0000",
						color: "white",
						padding: "10px 20px",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
					}}
				>
					Edit Cohort
				</button>
			</Link>
			<button
				onClick={handleDelete}
				style={{
					backgroundColor: "#FF0000",
					color: "white",
					padding: "10px 20px",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
				}}
			>
				Delete Cohort
			</button>
			<Trainees trainees={trainees} id={id} />
			<Link className="link" to={`/admin/cohorts/${id}/addtrainee`}>
				<button
					style={{
						backgroundColor: "#FF0000",
						color: "white",
						padding: "10px 20px",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
					}}
				>
					Add New Trainee
				</button>
			</Link>
		</div>
	);
};
