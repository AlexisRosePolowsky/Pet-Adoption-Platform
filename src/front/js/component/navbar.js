import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions}= useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Pawsitive Adoptions</span>
				</Link>

				<Link class="btn btn-secondary" to="/learnMore/:type/:id" >
					Educational Videos & Blogs
				</Link>

				<Link class="btn btn-secondary" to="/login" >
					Login
				</Link>

				<Link class="btn btn-secondary" to="/signup" >
					Signup
				</Link>

				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Cart
						</button>
						<ul class="dropdown-menu">
							{store.cart.map((cartitem,index)=>{
								return(
									<li key={index}>
										<span>{cartitem}</span>
										<button className="btn btn-danger" onClick={()=>actions.deletefromcart(index)}>delete</button>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
