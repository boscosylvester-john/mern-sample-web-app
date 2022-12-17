const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.json({"msg": "Get all workouts now!"})
})

router.get("/:id", (req, res) => {
	res.json({"msg": "Get a single workout!"})
})

router.post("/", (req, res) => {
	res.json({"msg": "Post a new workout!"})
})

router.delete("/:id", (req, res) => {
	res.json({"msg": "Delete a new workout!"})
})

router.patch("/:id", (req, res) => {
	res.json({"msg": "Patch a new workout!"})
})

module.exports = router