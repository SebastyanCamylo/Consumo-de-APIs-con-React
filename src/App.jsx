import {Button} from "./assets/components/Button"
import Card from "./assets/components/Card";
import './assets/sass/App.scss'
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useState, useEffect } from "react";


const App =()=>{

  const [pokemonId, setPokemonId] = useState(1)
  const [pokemonName, setPokemonName] = useState('')

useEffect(()=>{
getEvolutions(pokemonId);
},[pokemonId]) // useEffect solo se ejectuve una vez, solo cuando se actualice

async function getEvolutions(id){
  const response = await fetch (`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
  const data= await response.json()
  //console.log(data.chain.species.name)
  setPokemonName(data.chain.species.name)
}

  return(
    <>
    
    <div className="card-container">
      <Card />
    </div>
    <div className="buttons-container">
      <Button icon={<TiArrowLeftOutline/>} handleClick={()=>{
      (pokemonId -1)? // si es verdadero
      setPokemonId(1): // en caso contrario mostrara en nro negativo
      setPokemonId(pokemonId -1)
      }}/>

      {pokemonName}

      <Button icon={<TiArrowRightOutline/>} handleClick={()=>{setPokemonId(pokemonId +1)}}/>
    </div>
    </>
  )
}

export {App}