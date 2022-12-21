import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

	const [workouts, setWorkouts] = useState([])

	useEffect(() => {
		try{
			const fetchWorkouts = async () => {
				const allWorkouts = await axios.get("/api/workouts")
				console.log("got workouts: ", allWorkouts.data)
				setWorkouts(allWorkouts.data)
			}
	
			fetchWorkouts()
		}
		catch(error) {
			console.log("Error: ", error)
			setWorkouts([])
		}
		
	}, [])

	return (
		<div className="home">
			<h2>Home Page</h2>
			{
				workouts && (
					workouts.map((wk, idx) => {
						return (
							<p key={idx}>
								Workout: {wk.title} <br/>
								Reps: {wk.reps} <br/>
								Load: {wk.load} <br/>
							</p>
						)	
					})
				)
			}
		</div>
	)
}

export default Home;