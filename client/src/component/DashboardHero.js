import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./dashboardHero.css";
export const DashboardHero = (data) => {
  const { userName } = useContext(AppContext);
  return (
    <div className="pr_card">
      <p className="dashboardHero-title">Hi, {userName} London9</p>
      <p className="hero-prgph">Submitted pull requests: <span className="card-prgph-number">{data.achievedPulls}</span></p>
      <p className="hero-prgph">CodeWars Rank: <span className="card-prgph-number">{data.achievedRank}</span> kyu</p>
      <p className="hero-details">Scroll down to see more details</p>
    </div>
  );
};