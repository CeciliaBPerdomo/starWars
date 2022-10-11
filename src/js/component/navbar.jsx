import React from "react";
import {
    Link
} from "react-router-dom";

export const Navbar = () => {
    return (
        // <nav className="navbar navbar-light bg-light mb-3">
        // 	<Link to="/">
        // 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
        // 	</Link>
        // 	<div className="ml-auto">
        // 		<Link to="/demo">
        // 			<button className="btn btn-primary">Check the Context in action</button>
        // 		</Link>
        // 	</div>
        // </nav>
        <>
        <nav className = "navbar bg-light" >
            <div className = "container-fluid" >
            <a className = "navbar-brand" href = "#" >
                <img src = "https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"
                    alt = ""
                    width="60px"
                    height="45px"
                    className="d-inline-block align-text-top" />
            </a>

            <li class="nav-item dropdown">
            <a className="nav-link dropdown-toggle" 
            href="#" role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false" >
            Favoritos ❤</a> 
            <ul className="dropdown-menu" >
                <li>
                    <a className="dropdown-item" href = "#">Action</a>
                </li>
                <li>
                    <a className="dropdown-item" href = "#">Another action</a>
                </li>
                <li>
                    <a className="dropdown-item" href = "#">Something else here</a>
                </li>
            </ul> 
        </li>
    </div> 
    </nav>
    </>
  );
};