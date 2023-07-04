import { Button } from "./Button";

export const CohortsTable = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>name</th>
					<th>view</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>LDN9</td>
					<td> <Button title={"view"} /></td>
				</tr>
			</tbody>
		</table>
	);
};