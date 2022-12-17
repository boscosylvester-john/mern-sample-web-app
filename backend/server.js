require("dotenv").config()

const express = require("express")

// express app
const app = express()

// middleware
app.use((req, res, next) => {
	console.log(req.path, req.method)
})

// routes
app.get("/", (req, res) => {
	res.json({msg: "Welcome!"})
})

// listen for requests
app.listen(process.env.PORT, () => {
	console.log("hi, i am listening on port ", process.env.PORT)
})