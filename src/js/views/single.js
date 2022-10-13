import React, {
    useState,
    useEffect,
    useContext
} from "react";

import PropTypes from "prop-types";

import {
    Link,
    useParams
} from "react-router-dom";

import {Context} from "../store/appContext";

export const Single = props => {
	const params = useParams()
	//console.log(params)
    const { store, actions } = useContext(Context); 
    //console.log(store.personaje)
    // const [personajes, setPers] = useState({});
    // const obtenerCharacters = async () => {
    //     const params = useParams();
    //     try {
    //         params.theid = parseInt(params.theid) + 1
    //         const response = await fetch("https://swapi.dev/api/people/" + params.theid)
    //         const data = await response.json()
    //         setPers(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };
     
    useEffect(() => {
         actions.obtenerPersonaje(parseInt(params.theid) + 1)
     }, [])

    
    return ( 
		<div>
        <br />
		<h1>{store.personaje.name}</h1>
		<div className="card mb-3" style={{width: "720px", margin: "20px"}}>
  			<div className="row g-0">
    			<div className="col-md-4 align-self-center" style={{padding: "5px"}}>
      				<img src={"https://starwars-visualguide.com/assets/img/characters/" + 
                    (parseInt(params.theid) + 1) + ".jpg"} 
					className="img-fluid rounded-start" style={{width: "90%"}} />
    			</div>
				<div className="col-md-6">
				<div className="card-body">
					<p className="card-text">Año Nacimiento: <b>{store.personaje.birth_year}</b></p>
					<p className="card-text">Género: <b>{store.personaje.gender}</b></p>
					<p className="card-text">Estatura: <b>{store.personaje.height}</b></p>
                    <p className="card-text">Peso: <b>{store.personaje.mass}</b></p>
					<p className="card-text">Color de piel: <b>{store.personaje.skin_color}</b></p>
					<p className="card-text">Color de ojos: <b>{store.personaje.eye_color}</b></p>
                    <p className="card-text">Pelo: <b>{store.personaje.hair_color}</b></p>
				</div>
				</div>
  			</div>
		</div>
	</div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};