// La responsabilidad de este módulo es especificar el cambio de estado en respuesta a las acciones
//----------------------------------------------
// Trae 'action-types'
import { GET_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_NAME, GET_POKEMON_TYPES } from './action-types';
//----------------------------------------------
// Define estado inicial
const initialState = // Estado Global
{
    pokemons: [],
    detail: [],
    types: []
};
//---------------------------------------------- 
// Creación del reducer
const reducer = (state = initialState, action) =>
{
    switch (action.type) 
    {
        case GET_POKEMONS:
            return { 
                ...state, // Copia del estado y modifica la propiedad payload
                pokemons: action.payload 
            };
        
        case GET_POKEMON_NAME:
            return { 
                 ...state, // Copia del estado y modifica la propiedad payload
                detail: action.payload 
            };

        case GET_POKEMON_DETAIL:
            return {
                ...state, // Copia del estado
                detail: action.payload
            }
        
        case GET_POKEMON_TYPES:
            return {
                ...state,
                types: action.payload
            }
            
        default:
            return { ...state }; //Copia del estado
    }
};
//----------------------------------------------
// Se exporta el reducer
export default reducer; 
