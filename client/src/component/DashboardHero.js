import { useContext } from "react";
import { AppContext } from "../AppContext";
export const DashboardHero = () => {
  const { userName, githubData, codewarsData } = useContext(AppContext);

  return (
    <div className="pr_card">
      <h2>Hello {userName}!</h2>
      <p>Submitted pull request: {githubData}</p>
      <p>CodeWars Rank: {codewarsData}</p>
    </div>
  );
};