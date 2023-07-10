import "./User.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { fetchData } from "../filterMandatory";
export const Search = () => {
	const { userName, setFilteredPulls, setCodewarsData, setGitHubData } =
		useContext(AppContext);

	const handleSearch = () => {
		/////****GETTING CODEWARS DATA****///////
		fetch(`https://www.codewars.com/api/v1/users/${userName}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				return setCodewarsData(data);
			})
			.catch((err) => {
				console.error(err);
			});
		///////GETING gITHUB PULL REQUEST ON CYF REPOSITORI ====> THIS DATA NEED TO BE FILLTERD WHEN WE GOT MANDATORY COURSEWORK
		////THERE IS ANOTHER APPI AS WELL BUT NOT SURE WHICH ONE CAN GET BETTER RESULT(https://api.github.com/repos/OWNER/REPO/pulls))
		const githubUrl = `https://api.github.com/search/issues?q=is:pr%20author:${userName}%20user:codeyourfuture`;
		fetch(githubUrl)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				return setGitHubData(data);
			})
			.catch((err) => {
				console.error(err);
			});
		//I didnot touch githubData as we defined in context. I add filtered pulls here.
		fetchData(githubUrl)
			.then((filteredPulls) => {
				console.log("filteredPulls", filteredPulls);
				setFilteredPulls(filteredPulls);
			})
			.catch((err) => {
				console.log("Something went wrong", err);
			});
	};
	return (
		<button className="user-button" onClick={() => handleSearch()}>
			search
		</button>
	);
};
