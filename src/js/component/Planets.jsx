import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// Planeta 1: https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png

export const Planets = () => {  
    // const [planets, setPlanets] = useState([]);     
    // const obtenerPlanets = async () => {
    //     try {
    //         const response = await fetch("https://swapi.dev/api/planets/")
    //         const data = await response.json()
    //         console.log(data.results)
    //         setPlanets(data.results)
    //     } catch(error){
    //         console.log(error)
    //     }
    // };
    // useEffect(() => {
    //     obtenerPlanets()
    // }, [])
    const { store, actions } = useContext(Context);  

    return (
        <>
        <h1>Planetas 🌍</h1> 
        <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
            {store.planets.map((item, id) => (
            <div className="card align-self-start" key={id} style={{width:"18rem", flex: "none", margin: "10px"}}>
                {id === 0 ? <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="card-img-top" /> : 
                <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"} className="card-img-top" /> }
                    <div className="card-body">
                        <h5 className="card-title"><strong>{item.name}</strong></h5>
                        <p className="card-text">Clima: <b>{item.climate}</b></p>
                        <p className="card-text">Terreno: <b>{item.terrain}</b></p>
                        <p className="card-text">Habitantes: <b>{item.population}</b></p>
                        <Link to={"/singlePlanets/"+ id} className="btn btn-outline-dark">Mas Info +</Link>
                    </div>
            </div>
            ))}
        </div>
        </div>
    </>)
};
