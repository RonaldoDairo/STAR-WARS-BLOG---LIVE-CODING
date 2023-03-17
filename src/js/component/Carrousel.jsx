import React from "react";
import  CardPeople  from "./cardPeople.jsx";
import { CardPlanets } from "./cardPlanets.jsx";
import { CardVehicles } from "./cardVehicles.jsx";





export const Carrousel = ( { list,setList } ) =>{
    
    if(Array.isArray(list) && list.length != 0){
          //  console.log(list[0].name)
        return (
                <div className="container col-12 sm-6">
                    <div id="carrousel" className="card-group "> 
                    {/* {list ?
                    list.map((todo,index)=>{
                        <Card key={todo.name}> {todo.name} dadda</Card>
                    })
                       : setList } */}
                        <CardPeople/>
                        <CardPlanets/>
                        
                        
                    </div>
                    <div id="carrousel" className="card-group "> 
                    
                        <CardPlanets/>
                        
                        
                    </div>
                    <div id="carrousel" className="card-group "> 
                    
                        <CardVehicles/>
                        
                        
                    </div>
                </div>
        )
    }
} 