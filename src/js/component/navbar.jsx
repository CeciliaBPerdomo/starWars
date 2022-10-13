import React, {useContext} from "react";
import {
    Link
} from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
    const { store, actions } = useContext(Context); 
    return (
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

                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" 
                    href="#" role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" >
                    Favoritos ❤</a> 
                    <ul className="dropdown-menu" >
                        {store.favoritos.map((item, id) => (
                        <li key={id}>
                            <a className="dropdown-item" onClick={() => actions.favorites(item)}>
                            {item} <i class="fa fa-trash float-end"></i></a>
                        </li>))}
                    </ul> 
                    </div>  
            </div> 
        </nav>
    </>
  );
};