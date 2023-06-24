import { AppContext } from "../AppContext";
import { useContext } from "react";
import "../styles/MilestoneTable.css";

const MilestoneTable = () => {
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
						<td>{githubData}</td>
						<td>{codewarsData} out of 26</td>
						{/* codewarsData should get rank when fetch hapening (data.ranks.overall.name) */}
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default MilestoneTable;