import { DashboardHero } from "../component/DashboardHero";
import { CodeWarsCard } from "../component/CodeWarsCard";
import { PullRequestCard } from "../component/PullRequestCard";


export const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHero />
      <PullRequestCard />
      <CodeWarsCard  />
    </div>
  );
};