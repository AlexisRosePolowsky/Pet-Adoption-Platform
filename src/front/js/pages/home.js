import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import DogCard from "../component/DogCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store)
	return (
		<div className="text-center mt-5 homeContainer" >
			<p>Your new companion awaits!</p>
			<div className="cardContainer">
				{
					store.dogs.map((dog,index)=>{
						return(
							<DogCard key={index} dog={dog} id={index} type={"dogs"}/>
						)
					})
				}
			</div>
			<div className="cardContainer">
				{
					store.dogs2.map((dog,index)=>{
						return(
							<DogCard key={index} dog={dog} id={index} type={"dogs2"}/>
						)
					})
				}
			</div>
			<div className="cardContainer">
				{
					store.dogs3.map((dog,index)=>{
						return(
							<DogCard key={index} dog={dog} id={index} type={"dogs3"}/>
						)
					})
				}
			</div>

		</div>


	);

	
};