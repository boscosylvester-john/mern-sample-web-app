const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.json({"msg": "Get all workouts now!"})
})

module.exports = router