import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Characters = () => {  

    const bancoImagenes = [
        "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536&width=768", 
        "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536&width=768", 
        "https://lumiere-a.akamaihd.net/v1/images/r2-bhd-tooby-main_d16da8b6.jpeg?region=0%2C0%2C1560%2C878&width=768",
        "https://lumiere-a.akamaihd.net/v1/images/vaders-tie-fighter_8bcb92e1.jpeg?region=0%2C147%2C1560%2C878&width=768", 
        "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_1761a3ea.jpeg?region=303%2C11%2C974%2C547&width=768",
        "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593&width=768",
        "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527&width=768", "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768",
        "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768", 
        "https://lumiere-a.akamaihd.net/v1/images/databank_obadiah_01_169_cbb9d94d.jpeg?region=0%2C0%2C1560%2C878&width=768"
    ]
        

    const [personajes, setPers] = useState([]);
    const [imagen, setImagen] = useState(["https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536&width=768", 
    "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536&width=768", 
    "https://lumiere-a.akamaihd.net/v1/images/r2-bhd-tooby-main_d16da8b6.jpeg?region=0%2C0%2C1560%2C878&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/vaders-tie-fighter_8bcb92e1.jpeg?region=0%2C147%2C1560%2C878&width=768", 
    "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_1761a3ea.jpeg?region=303%2C11%2C974%2C547&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527&width=768", "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768", 
    "https://lumiere-a.akamaihd.net/v1/images/databank_obadiah_01_169_cbb9d94d.jpeg?region=0%2C0%2C1560%2C878&width=768"
])     

    const obtenerCharacters = async () => {
        try {
            const response = await fetch("https://swapi.dev/api/people/")
            const data = await response.json()
            console.log(data.results)
            setPers(data.results)
        } catch(error){
            console.log(error)
        }
    };

   
    useEffect(() => {
        obtenerCharacters()
    }, [])

    return (
        <>
        <h1>Personajes</h1>
        <div className="row">
        {personajes.map((item, id) => (
        <div className="card" key={id} style={{width:"18rem"}}>
            <img src={imagen[id]} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Genero: {item.gender}</p>
                    <p className="card-text">Color de ojos: {item.eye_color}</p>
                    <Link to={"/single/"+ id} className="btn btn-primary">Mas Info +</Link>
                </div>
        </div>
        ))}
        </div>
    </>)
};
