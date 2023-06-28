import { Router } from "express";
const router = Router();
import db from "../db";
router.get("/cohorts", async (req, res) => {
    try {
      const q = "SELECT * FROM cohorts";
      const result = await db.query(q);
      const cohorts = result.rows; // every rows has three columns currently.
      res.status(200).json({ cohorts });
    } catch (error) {
      console.error("Error retrieving cohorts:", error);
      res.status(500).send("Failed, Internal Server Error. Database or table not found");
    }
  });
  export default router;