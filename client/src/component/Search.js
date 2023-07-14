import "./User.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export const Search = () => {
    const { userName, setCodewarsData, setGitHubData } = useContext(AppContext);
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
        ///////GETING GITHUB PULL REQUEST ON CYF REPOSITORI
        fetch(`https://api.github.com/search/issues?q=is:pr%20author:${userName}%20user:codeyourfuture`)
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
    };
    return (
        <button className="user-button" onClick={() => handleSearch()} >search</button>
    );
};





