import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {       

    const { store, actions } = useContext(Context);  
//    console.log(store(Context))
    // const [personajes, setPers] = useState([]);
    // const obtenerCharacters = async () => {
    //     try {
    //         const response = await fetch("https://swapi.dev/api/people/")
    //         const data = await response.json()
    //         console.log(data.results)
    //         setPers(data.results)
    //     } catch(error){
    //         console.log(error)
    //     }
    // };

   
    // useEffect(() => {
    //     obtenerCharacters()
    // }, [])

    //console.log(actions.favorites)
    return (
        <>
        <h1>Personajes</h1>
        <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
            {store.personajes.map((item, id) => (
            <div className="card" key={id} style={{width:"18rem", flex: "none", margin: "10px"}}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{item.name}</strong></h5>
                        <p className="card-text">Género: <b>{item.gender}</b></p>
                        <p className="card-text">Color de ojos: <b>{item.eye_color}</b></p>
                        <Link to={"/single/"+ id} className="btn btn-outline-dark">Mas Info +</Link>
                        <div onClick={() => actions.favorites(item.name)} className="btn btn-outline-dark float-end">❤</div>
                    </div>
            </div> 
        ))}
            </div>
        </div>
    </>)
};
