export const getAllTrainees = (req, res) => {
    res.status(200).json("hello from trainees route");
};

export const getTrainee = (req, res) => {
    res.status(200).json("you can write your get function to get one trainee here");
};

export const createTrainee = (req, res) => {
    res.status(200).json("you can write your post function to create a new trainee here");
};