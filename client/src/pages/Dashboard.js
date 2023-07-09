import { DashboardHero } from "../component/DashboardHero";
import { CodeWarsCard } from "../component/CodeWarsCard";
import { PullRequestCard } from "../component/PullRequestCard";
import { UserData } from "../component/UserData";


export const Dashboard = () => {
  return (
    <div className="dashboard">
      <UserData />
      <DashboardHero />
      <PullRequestCard />
      <CodeWarsCard  />
    </div>
  );
};