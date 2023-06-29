exports.getAllCohorts = (req,res) => {
    res.status(200).json("hello from Cohorts route");
};

exports.getCohort = (req,res) => {
    res.status(200).json("you can write your get function to get one cohort here");
};

exports.createCohort = (req,res) => {
    res.status(200).json("you can write your post function to create new cohort here");
};