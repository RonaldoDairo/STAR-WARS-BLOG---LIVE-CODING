import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate =  useNavigate()

	const Home = () =>{
		navigate("/")
	}
	
	
	// console.log("loquetengoqueeliminar",index)
	// 	const isDelete = window.confirm(`¿Deseas Eliminar${index}`)
	// 	if (isDelete){
	// 		const newEquipos = actions.deletenoLike.filter
	// 		(el =>el.index === index)
	// 		actions.addFavorite(newEquipos)
	// 	} condicion para opcion  de si quiero eliminar
		


	

	
	
	const handleDelete =(indexToDelete)=>{
			actions.handleDelete(indexToDelete)
	}
	
		return (
		<nav className="navbar navbar-light bg-light mb-3">
				
				<span>
				<img src="https://images.unsplash.com/photo-1514302240736-b1fee5985889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RhciUyMHdhciUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="images" className="starwartim" onClick={Home} />
			</span>
			
			<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							FAVORITES <a className=" bg-secondary text-dark">{store.favorite.length}</a> 
						</a>
						<ul className="dropdown-menu">
						{store.favorite.map((todo,index)=> {
							
							return(
								<li key={index}>
									{todo}
								<i className="fas fa-trash-alt fa" 
                                onClick={()=>handleDelete(index)}></i>
								</li>
							)
						})
						}	
						</ul>
			</div>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};
