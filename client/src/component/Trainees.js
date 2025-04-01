import { Link } from "react-router-dom";
import "./trainees.css";

export const Trainees = ({ trainees,id }) => {
	return (
		<div className="trainees">
			{trainees.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th style={{ color: "white" }}>Github User Name</th>
							<th style={{ color: "white" }}>Full Name</th>
							<th style={{ color: "white" }}>Pull Requestes</th>
							<th style={{ color: "white" }}>Codewars</th>
							<th style={{ color: "white" }}>Options</th>
						</tr>
					</thead>
					<tbody>
						{trainees.map((trainee) => (
							<tr key={trainee.id}>
								<td>{trainee.github_user_name}</td>
								<td>{trainee.full_name}</td>
								<td>25 out of 26</td>
								<td> 5ku</td>
								<td>
									<span>
										<Link
											style={{
												backgroundColor: "#FF0000",
												color: "white",
												padding: "10px 20px",
												border: "none",
												borderRadius: "5px",
												cursor: "pointer",
											}}
											className="link"
											to={`/admin/cohorts/${id}/updateTrainee/${trainee.id}`}
										>
											Edit
										</Link>
									</span>
									{/* <span>
										<Link className="link">View</Link>
									</span> */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No one enrolled yet ...</p>
			)}
		</div>
	);
};
