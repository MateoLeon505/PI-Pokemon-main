// Este componente tiene la responsabilidad de mostrar cards
//----------------------------------------------
//Importa los componentes necesarios de las bibliotecas
import './cards.css'; // Estilos
import React from 'react'; // Importa React
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Card from '../pokemonCard/card.jsx'; // Trae Card
import giphy from '../../images/giphy.gif';
import pikachuGif from '../../images/gifPikachu.gif';
//----------------------------------------------
// Define el componente
const Cards = ({ collectionPokemons }) =>
{
    // Trae Pokemons
	const pokemons = useSelector(state => state.pokemons);
    //-----------------
    // Separa Types
    const getTypes = (pokemon) =>
    {
        if (pokemon.types.length === 0) 
        {
            return "No tiene tipos";    
        }
        else
        {
            return pokemon.types.map((type) => type).join(', ');
        }
    }
    //-----------------
    // Retorna pokemons
    return (
        <>
            {collectionPokemons.length > 0 ?
                <div  className = "cardGrid">
                    {collectionPokemons.map(pokemon =>
                        {
                            console.log(collectionPokemons);
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
                                weight = {pokemon.weight}
                                types = {getTypes(pokemon)}
                            /> );
                        })}
                </div>
                : <img src = {pikachuGif} alt="Loading" className = 'movable-image'/>
            }
        </>
    );
} 
//----------------------------------------------
// Exporta el componente
export default Cards;