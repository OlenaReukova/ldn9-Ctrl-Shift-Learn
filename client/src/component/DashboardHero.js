import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./dashboardHero.css";
export const DashboardHero = (data) => {
  const { userName } = useContext(AppContext);
  return (
    <div className="pr_card">
      <h2>Hi, {userName} London9</h2>
      <h3>Submitted pull request: {data.achievedPulls}</h3>
      <h4>CodeWars Rank: {data.achievedRank}</h4>
    </div>
  );
};
