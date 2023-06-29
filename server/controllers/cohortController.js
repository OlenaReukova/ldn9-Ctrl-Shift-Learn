export const getAllCohorts = (req, res) => {
    res.status(200).json("hello from Cohorts route");
};

export const getCohort = (req, res) => {
    res.status(200).json("you can write your get function to get one cohort here");
};

export const createCohort = (req, res) => {
    res.status(200).json("you can write your post function to create new cohort here");
};