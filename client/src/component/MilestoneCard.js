import "./milestoneCard.css";
import { CircleChart } from "./CircleChart";
export const MilestoneCard = ({
	time,
	timeVerb,
	data,
}) => {
	const getCodewarsScore = (value) => {
		let score = value === 8 ? 0 : value === 7 ? 20 : value === 6 ? 76 : value === 5 ? 229 : value === 5 ? 643 : 0;
		return score;
	};

	const checkMilestone = (target, achieved) => (achieved < target ? "BEHIND" : achieved === target ? "AT" : achieved > target ? "BEYOND" : "");


	return (
		<div className="milestone__card-container">
			<div className="milestone__title-container">
				<h2>
					<span>{time} Milestone:</span>
					<span>{data.name}</span>
				</h2>
				<p>
					Deadline {timeVerb} {data.deadline}
				</p>
			</div>
			<div className="milestone__card-subcontainer">
				<div className="factor-container">
					<h2>Pull Requests</h2>
					<p>
						<span>TARGET</span>
						<span>{data.targetPulls}</span>
					</p>
					<p>
						<span>ACHIEVED</span>
						<span>{data.achievedPulls}</span>
					</p>
					<div>
						<CircleChart targetScore={data.targetPulls} achievedscore={data.achievedPulls} />
					</div>

					<h2>{checkMilestone(data.targetPulls, data.achievedPulls)} Milestone</h2>
				</div>

				<div className="factor-container">
					<h2>Codewars</h2>
					<p>
						<span>TARGET</span>
						<span>{data.targetRank}</span>
					</p>
					<p>
						<span>ACHIEVED</span>
						<span>{data.achievedRank}</span>
					</p>
					<div>
					<CircleChart targetScore={getCodewarsScore(data.targetRank)} achievedscore={data.achievedScore} />
					</div>
					<h2>{checkMilestone(data.targetRank, data.achievedRank)} Milestone</h2>
				</div>
			</div>
		</div>
	);
};