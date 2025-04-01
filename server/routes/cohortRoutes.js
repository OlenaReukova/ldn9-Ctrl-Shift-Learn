import { Router } from "express";
import {
	getAllCohorts,
	createCohort,
	updateCohort,
	getCohort,
	deleteCohort,
} from "../controllers/cohortController.js";

const router = Router();

router.route("/").get(getAllCohorts).post(createCohort);

router.route("/:id").get(getCohort).put(updateCohort).delete(deleteCohort);

export default router;
