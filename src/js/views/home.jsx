import React, { useEffect, useState } from "react";
import { CardPeople } from "../component/CardPeople.jsx";
import { getData } from "../../services/services.jsx";



export const Home = () => {
	const [list, setList] = useState([])
	const getPeople = async()=>{
			const datePeople = await getData("people")
			setList(datePeople.results)
	} 
	
	useEffect(() => {
    //getData("people");
	getPeople()
  	}, []);

	
	return (
		<div className="text-center mt-5">
		<CardPeople list={list}></CardPeople>
		</div>
	);
	};
