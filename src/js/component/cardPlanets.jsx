import React from "react";
import "../../styles/home.css";

export const CardPlanets = ( {listtwo} ) => {
		
    return (
	
	<div className="cardpeople row   " >
		{listtwo.map((todo, index)=>{
                        return(
							
				<div className="card  text-center bg-transparent border-0  d-block col " >
						<img src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img" alt="..." />
						<div className="card-body cards">
						<h5 className="card-title text-uppercase" key={index}>{todo.name}</h5>
						<p className="card-text">Some quick </p>
						<a href="#" id="boton" className="btn btn-primary">Go somewhere</a>
						<i className="fa fa-heart text-warning  icons " />
						</div>
				</div>
				
                        )
                    })
                    }
	</div>
);
}