const WorkoutModel = require("../models/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req, res) => {
	const workouts = await WorkoutModel.find({}).sort({createdAt: -1})

	res.status(200).json(workouts)
}

const getSingleWorkout = async (req, res) => {
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({error: "No such workout"})
	}

	const workout = await WorkoutModel.findById(id)

	if(!workout){
		return res.status(404).json({error: "No such workout"})
	}

	res.status(200).json(workout)
}

const createWorkout = async (req, res) => {
	const {title, reps, load} = req.body
	try {
		const workoutObj = await WorkoutModel.create({title, reps, load})
		res.status(200).json(workoutObj)
	} catch(error){
		res.status(400).json({error: error.message})
	}
}

const deleteWorkout = async (req, res) => {
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({error: "No such workout"})
	}

	const workout = WorkoutModel.findOneAndDelete({_id: id})

	res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid){
		return res.status(404).json({error: "No such workout"})
	}

	const workout = WorkoutModel.findOneAndUpdate({_id: id}, {
		...req.body
	})

	res.status(200).json(workout)
}

module.exports = {
	getAllWorkouts,
	getSingleWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout
}