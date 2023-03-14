import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Card = () => (
	<div className="card" >
				<img src="..." className="card-img" alt="..." />
				<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text text-center">Some quick </p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
	</div>
);
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}