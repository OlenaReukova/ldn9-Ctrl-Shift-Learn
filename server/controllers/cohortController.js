import db from "../db";
export const getAllCohorts = async (req, res) => {
  try {
    const q = "SELECT * FROM cohorts";
    const result = await db.query(q);
    const cohorts = result.rows;
    res.status(200).json({ cohorts });
  } catch (error) {
    console.error("Error retrieving cohorts:", error);
    res.status(500).send("Failed, Internal Server Error.");
  }
};

export const getCohort = async (req, res) => { // it should be getAllTraineesByCohort
  try {
    const { id } = req.params;
    const q = "SELECT * FROM trainees WHERE cohort_id = $1";
    const result = await db.query(q, [id]);
    const trainees = result.rows;
    if (trainees.length>0) {
      console.log("Cohort found:", trainees);
      res.status(200).json({ "All Trainees of the specific cohort": trainees });
    } else {
      console.error("Cohort not found.");
      res.status(404).json({ error: "Cohort not found." });
    }
  } catch (error) {
    console.error("Error retrieving cohort:", error);
    res.status(500).send("Failed to retrieve cohort.");
  }
};

export const createCohort = async (req, res) => {
  try {
    const { name, start_date } = req.body; //Destructuring
    if (!name || !start_date) {
      return res.status(400).json({ error: "Please provide both Name and start_date." });
    }
    const q = "INSERT INTO cohorts (name, start_date) VALUES ($1, $2)";
    const result = await db.query(q, [name, start_date]);
    if (result.rowCount === 1) {
      res.status(201).json({ message: "New cohort created successfully" });
    } else {
      throw new Error("Failed to create new cohort.");
    }
  } catch (error) {
    console.error("Error creating cohort:", error);
    return res.status(500).send("Failed to create new cohort. Please ensure all required fields are provided in the correct format.");
  }
};
