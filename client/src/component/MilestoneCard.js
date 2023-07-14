import "./milestoneCard.css";
import { CircleChart } from "./CircleChart";
export const MilestoneCard = ({
	time,
	timeVerb,
	data,
	display,
}) => {
	const getCodewarsScore = (value) => {
		let score = value === 8 ? 0 : value === 7 ? 20 : value === 6 ? 76 : value === 5 ? 229 : value === 5 ? 643 : 0;
		return score;
	};

	const checkMilestone = (target, achieved) => (achieved < target ? "BEHIND" : achieved === target ? "AT" : achieved > target ? "BEYOND" : "");


	return (
		<div className="milestone__card-container">
			<div className="milestone__title-container">
				<p className="milestone-title">
					<span>{time} Milestone</span>
					<span>{data.name}</span>
				</p>
				<p>
					Deadline {timeVerb} {data.deadline}
				</p>
			</div>
			<div className="milestone__card-subcontainer">
				<div className="factor-container">
					<p className="factor-title">Pull Requests</p>
					<p className="card-prgph" >
						<span>TARGET:</span>
						<span>{data.targetPulls}</span>
					</p>
					<p className="card-prgph">
						<span>ACHIEVED:</span>
						<span>{data.achievedPulls}</span>
					</p>
					<div>
						<CircleChart targetScore={data.targetPulls} achievedscore={data.achievedPulls} />
					</div>

					<p style={{ display: display }}>{checkMilestone(data.targetPulls, data.achievedPulls)} Milestone</p>
				</div>

				<div className="factor-container">
					<p className="factor_title">Codewars</p>
					<p className="card-prgph">
						<span>TARGET:</span>
						<span>{data.targetRank}</span>
					</p>
					<p className="card-prgph">
						<span>ACHIEVED:</span>
						<span>{data.achievedRank} Kyu</span>
					</p>
					<CircleChart targetScore={getCodewarsScore(data.targetRank)} achievedscore={data.achievedScore} />
					<p style={{ display: display }}>{checkMilestone(data.targetRank, data.achievedRank)} Milestone</p>

				</div>
			</div>
		</div>
	);
};