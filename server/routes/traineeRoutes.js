const express = require("express");
const { getAllTrainees, createTrainee, getTrainee } = require("../controllers/traineeController");

const router = express.Router();

router
  .route("/")
  .get(getAllTrainees)
  .post(createTrainee);

router
  .route("/:id")
  .get(getTrainee);

module.exports = router;