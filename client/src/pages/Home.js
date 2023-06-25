import "./Home.css";
import User from "../component/User";
import Result from "../pages/Result"

export function Home() {
	return (
		<main className="main_container" role="main">
			<User />
			<Result />
		</main>
	);
}

export default Home;
