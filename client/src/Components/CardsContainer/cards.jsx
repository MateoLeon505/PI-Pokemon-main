// Este componente tiene la responsabilidad de mostrar cards
//----------------------------------------------
//Importa los componentes necesarios de las bibliotecas
import './cards.css'; // Estilos
import React from 'react'; // Importa React
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Card from '../pokemonCard/card.jsx'; // Trae Card
import pikachuGif from '../../images/gifPikachu.gif';
//----------------------------------------------
// Define el componente
const Cards = ({ collectionPokemons }) =>
{
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
            {
                Array.isArray(collectionPokemons)
                ?
                    <div  className = "cardGrid">
                        {
                            collectionPokemons.map(pokemon =>
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
                                        types = {getTypes(pokemon)}/> 
                                    );
                                })
                        }
                    </div>
                :
                    <div  className = "cardGrid">
                        <Card
                        id = {collectionPokemons.id}
                        name = {collectionPokemons.name}
                        sprites = {collectionPokemons.sprites}
                        hp = {collectionPokemons.hp}
                        attack = {collectionPokemons.attack}
                        defense = {collectionPokemons.defense}
                        speed = {collectionPokemons.speed}
                        height = {collectionPokemons.height}
                        weight = {collectionPokemons.weight}
                        types = {getTypes(collectionPokemons)}/> 
            </div>
            }
        </>
    );
} 
//----------------------------------------------
// Exporta el componente
export default Cards;
{/* <img src = {pikachuGif} alt="Loading" className = 'movable-image'/> */}