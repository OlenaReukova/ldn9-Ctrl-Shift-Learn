import { AppContext } from "../AppContext";
import { useContext } from "react";
import RoundProgressBar from "./RoundProgressBar";

const PullRequestCard = () => {
  const createdPullRequests = 20;
  const requiredPullRequests = 20;
  const currentMilestone = "Data Base week 3";
  const nextMilestone = "Final project";
  const remainingDays = 17;
  const nextMilestonePullRequests = 24;

  const percentComplete = Math.floor((createdPullRequests / requiredPullRequests) * 100);

  return (
    <div>
      <h4>Pull Requests</h2>
      <p>Your created pull requests: {createdPullRequests}</p>
      <p>Milestone: {currentMilestone}</p>
      <p>Required pull requests: {requiredPullRequests}</p>
      <h5>You are at Milestone</h5>
      <h4>Next Milestone: {nextMilestone}</h4>
      <p>Remaining days: {remainingDays}</p>
      <p>Required pull requests for next milestone: {nextMilestonePullRequests}</p>
      <p>You need {nextMilestonePullRequests - createdPullRequests} more pull requests in total</p>
      <p>You have created {percentComplete}% of the pull requests required to reach the next milestone</p>
      <RoundProgressBar percentComplete={percentComplete} />
    </div>
  );
};



