import "./PullRequestCard.css";

export const PullRequestCard = ({
	createdPullRequests,
	requiredPullRequests,
	currentMilestone,
	nextMilestone,
	remainingDays,
	nextMilestonePullRequests,
	percentComplete
  }) => {
	return (
	  <div className="pr_card">
		<h2>Pull Requests</h2>
		<p>Your created pull requests: {createdPullRequests}</p>
		<p>Milestone: {currentMilestone}</p>
		<p>Required pull requests: {requiredPullRequests}</p>
		<p>You are at Milestone</p>
		<p>Next Milestone: {nextMilestone}</p>
		<p>Remaining days: {remainingDays}</p>
		<p>Required pull requests for next milestone: {nextMilestonePullRequests}</p>
		<p>You need {nextMilestonePullRequests - createdPullRequests} more pull requests in total</p>
		<p>You have created {percentComplete}% of the pull requests required to reach the next milestone</p>
	  </div>
	);
  };
  
  
  
  
  
  
  

	return (
		<div className="pr_card">
			<h2>Pull Requests</h2>
			<p>Your created pull requests: {createdPullRequests}</p>
			<p>Milestone: {currentMilestone}</p>
			<p>Required pull requests: {requiredPullRequests}</p>
			<p>You are at Milestone</p>
			<p>Next Milestone: {nextMilestone}</p>
			<p>Remaining days: {remainingDays}</p>
			<p>
				Required pull requests for next milestone: {nextMilestonePullRequests}
			</p>
			<p>
				You need {nextMilestonePullRequests - createdPullRequests} more pull
				requests in total
			</p>
			<p>
				You have created {percentComplete}% of the pull requests required to
				reach the next milestone
			</p>
		</div>
	);
};
