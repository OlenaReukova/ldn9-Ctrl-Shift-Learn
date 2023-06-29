exports.getAllTrainees = (req, res) => {
    res.status(200).json("hello from trainees route");
};

exports.getTrainee = (req, res) => {
    res.status(200).json("you can write your get function to get one trainee here");
};

exports.createTrainee = (req, res) => {
    res.status(200).json("you can write your post function to create new trainee here");
};