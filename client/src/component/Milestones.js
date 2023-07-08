import milestonesData from "../../data/milestones.json";
import "./trainees.css";
export const Milestones = ({ milestones }) => {

console.log(milestones);
console.log(milestones["m_1"]);
    return (
        <div className="trainees">
        <table>
            <thead>
                <tr>
                    <th>milestone</th>
                    <th>Deadline</th>
                    <th>Pulls</th>
                    <th>Codewars</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>start</td>
                    <td>{milestones["start_date"]}</td>
                    <td>{milestonesData.start.pulls}</td>
                    <td>{milestonesData.start.codewars}</td>
                </tr>
                <tr>
                    <td>HTML-CSS</td>
                    <td>{milestones["m_1"]}</td>
                    <td>{milestonesData["HTML-CSS"].pulls}</td>
                    <td>{milestonesData["HTML-CSS"].codewars}</td>
                </tr>
                <tr>
                    <td>JS1-Week2</td>
                    <td>{milestones["m_2"]}</td>
                    <td>{milestonesData["JS1-Week2"].pulls}</td>
                    <td>{milestonesData["JS1-Week2"].codewars}</td>
                </tr>
                <tr>
                    <td>JS2-Week1</td>
                    <td>{milestones["m_3"]}</td>
                    <td>{milestonesData["JS2-Week1"].pulls}</td>
                    <td>{milestonesData["JS2-Week1"].codewars}</td>
                </tr>
                <tr>
                    <td>JS3-Week3</td>
                    <td>{milestones["m_4"]}</td>
                    <td>{milestonesData["JS3-Week3"].pulls}</td>
                    <td>{milestonesData["JS3-Week3"].codewars}</td>
                </tr>
                <tr>
                    <td>React-Week2</td>
                    <td>{milestones["m_5"]}</td>
                    <td>{milestonesData["React-Week2"].pulls}</td>
                    <td>{milestonesData["React-Week2"].codewars}</td>
                </tr>
                <tr>
                    <td>Node-Week2</td>
                    <td>{milestones["m_6"]}</td>
                    <td>{milestonesData["Node-Week2"].pulls}</td>
                    <td>{milestonesData["Node-Week2"].codewars}</td>
                </tr>
                <tr>
                    <td>DB-Week3</td>
                    <td>{milestones["m_7"]}</td>
                    <td>{milestonesData["DB-Week3"].pulls}</td>
                    <td>{milestonesData["DB-Week3"].codewars}</td>
                </tr>
                <tr>
                    <td>FP-Week2</td>
                    <td>{milestones["m_8"]}</td>
                    <td>{milestonesData["FP-Week2"].pulls}</td>
                    <td>{milestonesData["FP-Week2"].codewars}</td>
                </tr>
            </tbody>
        </table>
    </div>

    );

};