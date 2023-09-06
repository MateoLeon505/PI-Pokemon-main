// Este componente tiene la responsabilidad de mostrar cards
//----------------------------------------------
//Importa los componentes necesarios de las bibliotecas
import './cards.css'; // Estilos
import React from 'react'; // Importa React
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Card from '../pokemonCard/card.jsx'; // Trae Card
//----------------------------------------------
// Define el componente
const Cards = () =>
{
    // Trae Pokemons|
	const pokemons = useSelector(state=>state.pokemons);
    // Muestra pokemons
    return (
        <div  className = "cardGrid">
            {pokemons.map(pokemon =>
            {
                return (
                    <Card
                    id = {pokemon.id}
                    name = {pokemon.name}
                    sprites = {pokemon.sprites}
                    hp = {pokemon.hp}
                    attack = {pokemon.attack}
                    defense = {pokemon.defense}
                    speed = {pokemon.speed}
                    height = {pokemon.height}
                    weight = {pokemon.weight}/>
                );
            })}
        </div>
    );
} 
//----------------------------------------------
// Exporta el componente
export default Cards;