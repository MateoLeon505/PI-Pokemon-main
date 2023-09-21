// Este módulo representa las acciones que se toman en la aplicación
//----------------------------------------------
// Importación modulos y librerías
import axios from "axios";
const { GET_POKEMONS, GET_POKEMON_NAME, CLEAR_SEARCH_RESULTS, GET_POKEMON_DETAIL, GET_POKEMON_TYPES } = require('./action-types');
//----------------------------------------------
// Actions:
const getPokemons = () =>
{
    return async function (dispatch)
    {
        const response = await axios.get('http://localhost:3001/pokemons');
        dispatch({ type: GET_POKEMONS, payload: response.data });
    };
};
//-----------------
const getPokemonByName = (name) =>
{
    return async function (dispatch)
    {
        if (name.trim() === '') 
        {
            dispatch({ type: CLEAR_SEARCH_RESULTS })    
        }
        else
        {
            const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            dispatch({ type: GET_POKEMON_NAME, payload: response.data });
        }
    }
}
//-----------------
const getPokemonById = (id) =>
{
    return async function (dispatch)
    {
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
        dispatch({ type: GET_POKEMON_DETAIL, payload: response.data });
    };
};
//-----------------
const getPokemonTypes = () =>
{
    return async function (dispatch)
    {
        const response = await axios.get(`http://localhost:3001/types`);
        dispatch({ type: GET_POKEMON_TYPES, payload: response.data });
    };
};
//----------------------------------------------
// Exportación actions
export { getPokemons, getPokemonById, getPokemonTypes, getPokemonByName };