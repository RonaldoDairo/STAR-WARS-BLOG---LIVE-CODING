import React from "react";
import  CardPeople  from "./cardPeople.jsx";
import { CardPlanets } from "./cardPlanets.jsx";
import { CardVehicles } from "./cardVehicles.jsx";





export const Carrousel = ( { list ,listtwo,listthree} ) =>{
    console.log("list",listthree)
    // if(Array.isArray(list) && list.length != 0){
    //        console.log(list[0].name)
        return (

                    
                <div className="container ">
                        
                    <div id="carrousel" className="card-group "> 

                        <CardPeople list={list}/>

                    </div>

                    <div id="carrousel" className="card-group"> 

                        <CardPlanets listtwo={listtwo}/> 

                    </div>

                    <div id="carrousel" className="card-group "> 
                    
                        <CardVehicles listthree={ listthree} />
                        
                    </div>
                </div>
        )
    }
// } 