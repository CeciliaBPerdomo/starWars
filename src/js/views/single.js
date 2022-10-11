import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
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
	
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [personajes, setPers] = useState({});   
	const [imagen, setImagen] = useState("")  

    const obtenerCharacters = async () => {
        try {
			params.theid = parseInt(params.theid) + 1
            const response = await fetch("https://swapi.dev/api/people/" + params.theid)
			//console.log(response)
            const data = await response.json()
			console.log(data)
            setPers(data)
			const posicion = parseInt(params.theid) - 1
			setImagen(bancoImagenes[posicion])
        } catch(error){
            console.log(error)
        }
    };

   
    useEffect(() => {
        obtenerCharacters()
    }, [])

	return (
		<div>
			<br />
		<div className="card mb-3">
  			<img src={imagen} className="card-img-top" style={{width:"35%"}}/>
  			<div className="card-body">
    			<h5 className="card-title">{personajes.name}</h5>
    			<p className="card-text"></p>
				<div className="container text-start float-start">
  					<div className="row row-cols-auto">
    					<div className="col-2">Nombre:<br />{personajes.name}</div>
    					<div className="col-2">Cumpleaños:<br />{personajes.birth_year}</div>
    					<div className="col-2">Genero:<br />{personajes.gender}</div>
    					<div className="col-2">Estatura:<br />{personajes.height}</div>
						<div className="col-2">Color de piel:<br />{personajes.skin_color}</div>
						<div className="col-2">Color de ojos:<br />{personajes.eye_color}</div>
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
