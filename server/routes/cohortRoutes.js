const express = require("express");
const { getAllCohorts, createCohort, getCohort } = require("../controllers/cohortController");

const router = express.Router();

router
  .route("/")
  .get(getAllCohorts)
  .post(createCohort);

router
  .route("/:id")
  .get(getCohort);

module.exports = router;