import { AppContext } from "../AppContext";
import { useContext } from "react";
import "../styles/MilestoneTable.css";

export const MilestoneTable = () => {
	const { githubData, codewarsData } = useContext(AppContext);
	return (
		<div className="table-wrapper">
			<table>
				<thead>
					<tr>
						<th>Pull requests</th>
						<th>Codewars Rank</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{githubData.total_count} out of 26</td>
						<td>{codewarsData.ranks?.overall?.name || ""} </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
