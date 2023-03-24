import React,{useContext, useState} from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link} from "react-router-dom";

 const CardPeople = ({list}) => {
	const { store, actions } = useContext(Context);
	const [task,setTask] = useState();
	
	// const navigate = useNavigate()

	const addPeopleFavorite = (name)=>{
			actions.addFavorite(name)
	}


	
	return (
		
	<>
		
		{list.map((todo, index)=>{
                        return(
							
				<div className="row row-cols-1 row-cols-md-3 g-4">
						<div className="col">
								<div className=" h-100">
											<img src="https://images.unsplash.com/photo-1599719500956-d158a26ab3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RhciUyMHdhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top w-60" alt="..."/>
										<div className="bodycard">
											<h5 className="text-uppercase d-block" key={index}>{todo.name} </h5>
											<p className="card-text" >  Some quick</p>
											<Link to={`/details/${todo.name}`}>
											<a href="#" id="boton" className="btn btn-primary" >Learn More!</a>
											</Link>
											<i className="fa fa-heart text-warning  icons " onClick={()=>addPeopleFavorite(todo.name)}/>
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
export default CardPeople
