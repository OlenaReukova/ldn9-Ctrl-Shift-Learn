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
        res.status(500).send("Failed, Internal Server Error");
    }
};

export const createTrainee = (req, res) => {
    res.status(200).json("you can write your post function to create a new trainee here");
};

