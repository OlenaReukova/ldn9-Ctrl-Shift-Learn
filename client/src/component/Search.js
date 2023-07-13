import "./User.css";
import { useContext,useState } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

export const Search = () => {
	const { userName, setCodewarsData, setGitHubData } = useContext(AppContext);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

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
                navigate("/result");
				return setCodewarsData(data);

			})
			.catch((err) => {
				console.error(err);
                setError(true);
                });
                setTimeout(() => {
                    setError(false);
                  }, 3000);

		///////GETING GITHUB PULL REQUEST ON CYF REPOSITORI
		fetch(
			`https://api.github.com/search/issues?q=is:pr%20author:${userName}%20user:codeyourfuture`
		)
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
                setError(true);
			});

	};
	return (
            <div>
                <div>
                    <button className="user-button" onClick={handleSearch}>
                      Go for It
                    </button>
                </div>
                        <div>{error && <p>User does not exist in the organization.</p>}</div>
            </div>
      );
};
