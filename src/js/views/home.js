import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useActionData } from "react-router";
import { Link } from "react-router-dom";

export const Home = () => {
	useEffect(()=> {
		actions.getCharacters()

	}, [])

	return{
		<div>{store.characterDetails.map((item, index)=>{
			return(
				<Link to={`/single/${item.id}`}>
					<li>
						<ul>{item.name}</ul>
					</li>
				</Link>
			)
		}</div>
	}

};
	
);
