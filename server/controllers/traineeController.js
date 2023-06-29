import db from "../db";

export const getAllTrainees = (req, res) => {
    res.status(200).json("hello from trainees route");
};

export const getTrainee = async (req, res) => {
    const { traineeId } = req.params;

    try {
        const q = "SELECT * FROM trainees WHERE id = $1";
        const result = await db.query(q, [traineeId]);
        const trainee = result.rows[0];

        if (!trainee) {
            return res.status(404).json({ error: "Trainee not found" });
        }

        res.status(200).json({ trainee });
    } catch (error) {
        console.error("Error retrieving trainee:", error);
        res.status(500).send("Failed, Internal Server Error. Database or table not found");
    }
};

export const searchTrainee = async (req, res) => {
    const { userName } = req.params;

    try {
        const codewarsDataResponse = await fetch(`https://www.codewars.com/api/v1/users/${userName}`);
        if (!codewarsDataResponse.ok) {
            res.status(404).json({ error: "the serever can not get data, please be sure your userName is correct" });
        }
        const codewarsData = await codewarsDataResponse.json();

        const githubDataResponse = await fetch(`https://api.github.com/search/issues?q=is:pr%20author:${userName}%20user:codeyourfuture`);
        if (!githubDataResponse.ok) {
            res.status(404).json({ error: "the serever can not get data, please be sure your userName is correct" });
        }
        const githubData = await githubDataResponse.json();

        res.status(200).json({
            codewarsData,
            githubData,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json("Failed, Internal Server Error");
    }
};

export const createTrainee = (req, res) => {
    res.status(200).json("you can write your post function to create a new trainee here");
};

