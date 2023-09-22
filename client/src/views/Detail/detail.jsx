// Detalles del Pokemon
//----------------------------------------------
// Importación módulos
import { useDispatch, useSelector } from "react-redux"; // Dispatch de Redux
import { useEffect, useState } from 'react'; // Para efecto secundario después de montar el componente
import { useParams } from 'react-router-dom'; // Valor url
import { NavLink } from 'react-router-dom';
import { getPokemonById } from '../../redux/actions';
//----------------------------------------------
const Detail = (props) =>
{
    const pokemonDetail = useSelector((state) => state.detail); // Trae detalles del pokemon
    const dispatch = useDispatch(); // Para despachar acciones
    const { id } = useParams(); // Trae id de la URL
    //---------------
    // Cuando el componente se monta o el id cambia, busca los detalles del Pokémon.
    useEffect(() => 
    {
        dispatch(getPokemonById(id)); // Despacha action que busca al pokemon
    }, [dispatch, id]);
    //---------------
    const getTypes = (pokemonDetail) =>
    {
        if (!pokemonDetail || !pokemonDetail.types || pokemonDetail.types.length === 0) 
        {
            return "No tiene tipos";    
        }
        else
        {
            return pokemonDetail.types.map((type) => type).join(', ');
        }
    }
    return(
    <div>
        {
            pokemonDetail
            ? 
                <div>
                    <NavLink to ='/home'>
                        <button>Back</button>
                    </NavLink>
                    <p className = 'cardName'> {pokemonDetail.name}</p>
                    <img src = {pokemonDetail.sprites} alt = {pokemonDetail.name} className = "cardImage" />
                    <div className = "cardStats">
                        <p> <strong>Id: </strong>{pokemonDetail.id}</p>
                        <p><strong>HP: </strong>{pokemonDetail.hp}</p>
                        <p><strong>Attack: </strong>{pokemonDetail.attack}</p>
                        <p><strong>Defense: </strong>{pokemonDetail.defense}</p>
                        <p><strong>Speed: </strong>{pokemonDetail.speed}</p>
                        <p><strong>Height:  </strong>{pokemonDetail.height}</p>
                        <p><strong>Weight:  </strong>{pokemonDetail.weight}</p>
                        <p><strong>Types:  </strong>{getTypes(pokemonDetail)}</p>
            </div>
                </div>
            :
                <div>
                </div>
        }
        {
            console.log(pokemonDetail)
        }
    </div>
    );
}
//----------------------------------------------
export default Detail;