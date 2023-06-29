import { Router } from "express";
import { getAllTrainees, createTrainee, getTrainee } from "../controllers/traineeController";

const router = Router();

router
  .route("/")
  .get(getAllTrainees)
  .post(createTrainee);

router
  .route("/:id")
  .get(getTrainee);

export default router;