import React from "react";
import  CardPeople  from "./cardPeople.jsx";
import { CardPlanets } from "./cardPlanets.jsx";
import { CardVehicles } from "./cardVehicles.jsx";



export const Carrousel = ( { list , listtwo, listthree } ) =>{
            
    // if(Array.isArray(list) && list.length != 0){
    //        console.log(list[0].name)
        return (
                <>
                         <h4 className="card-title text-uppercase text-danger text-start">PEOPLE</h4>
                                <div id="carrousel" className="card-group"> 
                                
                                    <CardPeople list={list} />

                                </div>
                    <h4 className="card-title text-uppercase text-danger text-start">PLANETS</h4>
                                <div id="carrousel" className="card-group"> 
                                
                                    <CardPlanets listtwo={listtwo}/> 

                                </div>
                    <h4 className="card-title text-uppercase text-danger text-start">VEHICLES</h4>
                                    <div id="carrousel" className="card-group "> 
                                        
                                        <CardVehicles listthree={ listthree} />
                                        
                                    </div>
                </>
        )
    }
