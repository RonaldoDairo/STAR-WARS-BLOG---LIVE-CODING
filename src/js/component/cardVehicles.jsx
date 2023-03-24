import React,{useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
export const CardVehicles = ({ listthree }) => {
	const { store, actions } = useContext(Context);
	const addVehiclesFavorite = (name)=>{
			actions.addFavorite(name)

	}
	
    
    return (
	
	<>
		{listthree.map((todo, index)=>{
                        return(
														
				<div className="row row-cols-2 row-cols-md-3 g-4">
					<div className="col">
							<div className="h-100">
										<img src="https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHN0YXIlMjB3YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top w-60" alt="..."/>
									<div className="bodycard">
										<h5 className="text-uppercase d-block" key={index}>{todo.name}</h5>
										<p className="card-text">Some quick</p>
										<Link to={`/details/${todo.name}`}>
											<a href="#" id="boton" className="btn btn-primary" >Learn More!</a>
										</Link>
										<i className="fa fa-heart text-warning  icons " onClick={()=>addVehiclesFavorite(todo.name)} />
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
