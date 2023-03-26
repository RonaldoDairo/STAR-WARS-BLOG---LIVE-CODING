import React, { useEffect, useState } from "react";
import { Carrousel } from "../component/Carrousel.jsx";
import {  getData } from "../../services/index.js";



export const Home = () => {
		const [list, setList] = useState([])
		const [listtwo, setlisttwoSet] = useState([])
		const [listthree, setlistthreeSet] = useState([])
		const [load, setLoad] = useState (false)
		const getPeople = async()=>{
				setLoad(true)
				const datePeople = await getData("people")
				const datePlanets = await getData("planets")
				const dateVehicles = await getData("vehicles")
				setList(datePeople.results)
				setlisttwoSet(datePlanets.results)
				setlistthreeSet(dateVehicles.results)
			setLoad(false)
	};
			useEffect(() => {
				getPeople()
				}, []);

	return (
		<div className="text-center mt-5">
							{load ? <div class="d-flex justify-content-center">
							<div class="spinner-border" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
							</div> : null}
					<Carrousel list={list} listtwo={listtwo} listthree={listthree}></Carrousel>
		</div>
	);
	};
