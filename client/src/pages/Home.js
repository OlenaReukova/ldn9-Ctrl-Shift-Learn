import { User } from "../component/User";
import { Footer } from "../component/Footer";
import "../component/Footer.css";
export const Home = () => {
	return (
		<main className="main_container" role="main">
			<User />
			<Footer />
		</main>
	);
};
