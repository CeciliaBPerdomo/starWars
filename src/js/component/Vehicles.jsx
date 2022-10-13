import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Vehiculos = () => {  

    const [vehiculos, setVehiculos] = useState([]);     

    const obtenerVehiculos = async () => {
        try {
            const response = await fetch("https://swapi.dev/api/vehicles/")
            const data = await response.json()
            console.log(data.results)
            setVehiculos(data.results)
        } catch(error){
            console.log(error)
        }
    };
    
    useEffect(() => {
        obtenerVehiculos()
    }, [])

    return (
        <>
        <h1>Vehiculos</h1>
        <div className="d-flex flex-column-1">
        {vehiculos.map((item, id) => (
        <div className="card align-self-start" key={id} style={{width:"18rem"}}>
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id + 1) + ".jpg"} 
            className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Modelo: {item.model}</p>
                    <p className="card-text">Pasajeros: {item.passengers}</p>
                    <p className="card-text">Tipo: {item.vehicle_class}</p>
                    <Link to="#" className="btn btn-primary">Mas Info +</Link>
                </div>
        </div>
        ))}
        </div>
    </>)
};
