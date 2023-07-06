import db from "../db";

export const getAllTrainees = (req, res) => {
	res.status(200).json("hello from trainees route");
};

export const getTrainee = async (req, res) => {
	const { id } = req.params;

	try {
		const q = "SELECT * FROM trainees WHERE id = $1";
		const result = await db.query(q, [id]);
		const trainee = result.rows[0];

		if (!trainee) {
			return res.status(404).json({ error: "Trainee is not found" });
		}

		res.status(200).json({ trainee });
	} catch (error) {
		console.error("Error retrieving trainee:", error);
		res.status(500).send("Failed, Internal Server Error");
	}
};

export const searchTrainee = async (req, res) => {
	const { userName } = req.params;
	try {
		const q =
			"SELECT cohorts.name AS cohort_name, cohorts.start_date  FROM cohorts C  JOIN trainees T ON C.id = T.cohort_id WHERE T.gitHub_user_name = $1";
		const result = await db.query(q, [userName]);
		const trainee = result.rows[0];

		if (!trainee) {
			return res.status(404).json({ error: "Trainee is not found" });
		}

		res.status(200).json({ trainee });
	} catch (error) {
		console.error("Error retrieving trainee:", error);
		res.status(500).send("Failed, Internal Server Error");
	}
};

export const createTrainee = (req, res) => {
	res
		.status(200)
		.json("you can write your post function to create a new trainee here");
};

export const updateTrainee = async (req, res) => {
	const { id } = req.params;
	const { full_name, cohort_id, github_user_name } = req.body;
	try {
		const q =
			"UPDATE trainees SET github_user_name= $1, full_name = $2, cohort_id = $3 WHERE id = $4";
		await db.query(q, [github_user_name, full_name, cohort_id, id ]);
		res.status(200).json({ message: "Trainee details updated successfully" });
	} catch (error) {
		console.error("Error updating trainee details:", error);
		res.status(500).send("Failed, Internal Server Error");
	}
};
