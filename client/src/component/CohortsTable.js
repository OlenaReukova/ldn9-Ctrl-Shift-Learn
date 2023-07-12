import { Link } from "react-router-dom";
import { Button } from "./Button";

export const CohortsTable = ({ cohortsData }) => {
	return (
		<div>
			{cohortsData.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Cohort Name</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>
						{cohortsData.map((cohort) => (
							<tr key={cohort.id}>
								<td>{cohort.name}</td>
								<td>
									<span>
										<Link to={`${cohort.id}`}>
											<Button title={"view"} />
										</Link>
									</span>
									<span>
										<Link to={`/admin/cohorts/updatecohort/${cohort.id}`}>
											<Button title={"Edit"} />
										</Link>
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No cohorts found.</p>
			)}
		</div>
	);
};
