import "./Home.css";
import User from "../component/User";
import MilestoneTable from  "../component/MilestoneTable";

export function Home() {

	return (
		<main className="main_container" role="main">
			<User />
			<MilestoneTable />
		</main>
	);
}

export default Home;
