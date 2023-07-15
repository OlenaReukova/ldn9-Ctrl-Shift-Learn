import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./dashboardHero.css";

export const DashboardHero = (data) => {
  const { userName } = useContext(AppContext);
  return (
    <div className="pr_card">
      <h2>Hello {userName}!</h2>
      <p>Submitted pull request: {data.achievedPulls}</p>
      <p>CodeWars Rank: {data.achievedRank}</p>
    </div>
  );
};