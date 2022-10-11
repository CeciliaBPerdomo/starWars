import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Characters} from '../component/Characters.jsx'
import { Planets } from "../component/Planets.jsx";

export const Home = () => (	
		<div>
			<div className="d-inline"><Characters /></div>
			<br />
			<div><Planets /></div>
		</div> 
);
