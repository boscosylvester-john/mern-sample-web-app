const WorkoutModel = require("../models/workoutModel")

const getAllWorkouts = async (req, res) => {

}

const getSingleWorkout = async (req, res) => {

}

const createWorkout = async (req, res) => {
	const {title, reps, load} = req.body
	try {
		const workoutObj = await WorkoutModel.create({title, reps, load})
		res.status(200).json(workoutObj)
	} catch(error){
		res.status(400).json({"error": error.message})
	}
}

const deleteWorkout = async (req, res) => {

}

const updateWorkout = async (req, res) => {
	
}

module.exports = {
	createWorkout
}