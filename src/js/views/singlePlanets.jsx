import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    // const [planets, setPlanets] = useState({});  
    // const obtenerPlanets = async () => {
    //     try {
    //         params.theid = parseInt(params.theid) + 1
    //         const response = await fetch("https://swapi.dev/api/planets/" + params.theid)
    //         //console.log(response)
    //         const data = await response.json()
    //         //console.log(data)
    //         setPlanets(data)
    //     } catch(error){
    //         console.log(error)
    //     }
    // };

    useEffect(() => {
        actions.obtenerPlaneta(parseInt(params.theid) + 1)
    }, [])

    console.log(store.planet)

    return(
        <div>
            <h1>Planeta 🌍: {store.planet.name}</h1>
            <div className="card mb-3" style={{width: "720px", margin: "20px"}}>
                <div className="row g-0">
                    <div className="col-md-6 align-self-center" style={{padding: "3px"}}>
            
                    {parseInt(params.theid) === 0 ? 
                        <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} 
                        className="img-fluid rounded" 
                        style={{width: "100%"}}/> : 

                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + 
                        (parseInt(params.theid) + 1) + ".jpg"} 
                        className="img-fluid rounded"
                        style={{width: "100%"}}/>}
                    </div>
                
                    <div className="col-md-6">
                        <div className="card-body">
                        <h5 className="card-title">Nombre: <strong>{store.planet.name}</strong></h5>
                        <br />
                        <p className="card-text">Clima: <b>{store.planet.climate}</b></p>
                        <p className="card-text">Habitantes: <b>{store.planet.population}</b></p>
                        <p className="card-text">Terreno: <b>{store.planet.terrain}</b></p>
                        <p className="card-text">Diametro: <b>{store.planet.diameter}</b></p>
                        <p className="card-text">Periodo de rotacion: <b>{store.planet.rotation_period}</b></p>
                        <p className="card-text">Periodo orbital: <b>{store.planet.orbital_period}</b></p>
                        <p className="card-text">Gravedad: <b>{store.planet.gravity}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

SinglePlanets.propTypes = {
	match: PropTypes.object
};
