import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Planets = () => {  

    const [planets, setPlanets] = useState([]);     

    const obtenerPlanets = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/planets/")
            const data = await response.json()
            //console.log(data.results)
            setPlanets(data.results)
        } catch(error){
            console.log(error)
        }
    };
    
    useEffect(() => {
        obtenerPlanets()
    }, [])

    return (
        <>
        <h1>Planetas</h1>
        <div className="d-flex flex-column-1">
        {planets.map((item) => (
        <div className="card align-self-start" key={item.uid} style={{width:"18rem;"}}>
            <img src="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
        </div>
        ))}
        </div>
    </>)
};
