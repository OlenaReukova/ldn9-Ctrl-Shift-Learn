import "../styles/MilestoneTable.css";
const MilestoneTable = () => {
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
						<td>5 out of 7</td>
						<td>3</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default MilestoneTable;