import "./PullRequestCard.css";
import { CircleChart } from "./CircleChart";
export const MilestoneCard = ({
	time,
	timeVerb,
	// createdPullRequests,
	// requiredPullRequests,
	// currentMilestone,
	// nextMilestone,
	// remainingDays,
	// nextMilestonePullRequests,
	// percentComplete,
	data,
}) => {
	console.log("currentData", data);
	return (
		<div className="milestoneCard-container">
			<h1>
				<span>{time} Milestone:</span>
				<span>{data.name}</span>
			</h1>
			<div>
				Deadline {timeVerb} {data.deadline}
			</div>
			<div className="pr_card">
				<h2>Pull Requests</h2>
				<div>
					<div>
						<span>TARGET</span>
						<span>{data.targetPulls}</span>
					</div>
					<div>
						<span>ACHIEVED</span>
						<span>{data.achievedPulls}</span>
					</div>
				</div>
				<CircleChart />
				<h2>At Milestone</h2>
			</div>
			<div className="pr_card">
				<h2>Codewars</h2>
				<div>
					<div>
						<span>TARGET</span>
						<span>{data.targetRank}</span>
					</div>
					<div>
						<span>ACHIEVED</span>
						<span>{data.achievedRank}</span>
					</div>
				</div>
				<CircleChart />
				<h2>At Milestone</h2>
			</div>
		</div>
	);
};
