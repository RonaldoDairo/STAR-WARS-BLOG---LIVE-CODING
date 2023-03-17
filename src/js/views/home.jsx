import React, { useEffect, useState } from "react";
import { Carrousel } from "../component/Carrousel.jsx";
import { getData } from "../../services/services.jsx";



export const Home = () => {
	const [list, setList] = useState([])
	const getPeople = async()=>{
			const datePeople = await getData("people")
			setList(datePeople.results)
	} 
	
	useEffect(() => {
	getPeople()
  	}, []);

	return (
		<div className="text-center mt-5">
		<Carrousel list={list}></Carrousel>
		
		</div>
	);
	};
