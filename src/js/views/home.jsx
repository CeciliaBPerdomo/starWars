import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Characters} from '../component/Characters.jsx'
import { Planets } from "../component/Planets.jsx";
// import { Vehiculos } from "../component/Vehicles.jsx";

export const Home = () => (	
		<div>
			<div><Characters /></div>
			<br />
			<div><Planets /></div>
			<br />
			{/* <div className="d-inline"><Vehiculos /></div> */}
		</div> 
);
