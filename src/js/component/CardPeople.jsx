import React from "react";
import { Card } from "./card.jsx";


export const CardPeople = ( {list} ) =>{

    console.log("este es la list",list)



    

        return (
                <div className="container col-12 sm-6">
                    <div id="carrousel" className="card-group "> 
                    {list.map((todo,index)=>{
                        <div key={todo.id}> {todo.id} </div>
                    })
                        }
                    </div>
                </div>
        )
} 