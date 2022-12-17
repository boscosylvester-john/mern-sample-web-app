require("dotenv").config()

const express = require("express")
const workoutsRouter = require("./routes/workouts")

// express app
const app = express()

// middleware
app.use(express.json()) // to access req.body

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// routes
app.use("/api/workouts", workoutsRouter)

// listen for requests
app.listen(process.env.PORT, () => {
	console.log("hi, i am listening on port ", process.env.PORT)
})