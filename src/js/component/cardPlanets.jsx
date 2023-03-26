import React,{useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
export const CardPlanets = ( { listtwo } ) => {
	const { actions } = useContext(Context);

	const addPlanetsFavorite = (name)=>{
			actions.addFavorite(name)

	}
		
    return (
	
	<>
		{listtwo.map((todo, index)=>{
                        return(
				<div className="row row-cols-1 row-cols-md-3 g-4">
						<div className="col">
							<div className="h-100">
											<img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhciUyMHdhciUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top w-60" alt="..."/>
											<div className="bodycard">
												<h5 className="text-uppercase d-block" key={index}>{todo.name}</h5>
												<p className="card-text">Some quick</p>
												<Link to={`/detailsPlanets/planets/${todo.uid}`}>
												<a href="#" id="boton" className="btn btn-primary" >Learn More! </a>
												</Link>
													<i className="fa fa-heart text-warning  icons text-uppercase " onClick={()=>addPlanetsFavorite(todo.name)} />
											</div>
							</div>
						</div>
				</div>
                        )
                    })
                    }
					
	</>
);
}