export const Milestones = ({ cohortData }) => {

  let milestone = cohortData[0];

    return (
        <div className="milestone-table__wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Milestone</th>
                        <th>Deadline</th>
                        <th>Pulls</th>
                        <th>Codewars</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>start
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>HTML-CSS
                        <td>cohortData.start_date</td>
                        <td></td>
                    </tr>
                    <tr>JS1-Week2
                        <td>cohortData.start_date</td>
                        <td></td>
                    </tr>
                    <tr>JS2-Week1
                        <td>cohortData.start_date</td>
                        <td></td>
                    </tr>
                    <tr>JS3-Week3
                        <td>cohortData.start_date</td>
                        <td></td>
                    </tr>
                    <tr>React-Week2
                        <td>cohortData.start_date</td>
                        <td></td>
                    </tr>
                    <tr>Node-Week2
                        <td>cohortData.start_date</td>
                        <td></td>
                    </tr>
                    <tr>DB-Week3
                        <td>cohortData.start_date</td>
                        <td></td>
                    </tr>
                    <tr>FP-Week2
                        <td>cohortData.start_date</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};