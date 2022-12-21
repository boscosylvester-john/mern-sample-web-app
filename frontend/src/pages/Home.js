import { useEffect } from "react";
import axios from "axios";

const Home = () => {

	useEffect(() => {
		const fetchWorkouts = async () => {
			const workouts = await axios.get("/api/workouts")
			console.log("got workouts: ", workouts.data)
		}

		fetchWorkouts()
	}, [])

	return (
		<div className="home">
			<h2>Home Page</h2>
		</div>
	)
}

export default Home;