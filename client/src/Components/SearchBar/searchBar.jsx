// Este componente tiene la responsabilidad de crear la barra de búsqueda
//----------------------------------------------
// Importación módulos
import { useState } from 'react'; // Estado del componente
import { getPokemons, getPokemonByName } from '../../redux/actions'; // Para despachar acciones a Redux
import { CLEAR_SEARCH_RESULTS } from '../../redux/action-types'; // Para limpiar action de busqueda
import { useDispatch, useSelector } from "react-redux"; // Dispatch de Redux
import './searchBar.css';
//----------------------------------------------
const SearchBar = () =>
{
    const pokemonsState = useSelector((state) => state.pokemons);

    const dispatch = useDispatch(); //  Dispatch de Redux
    const [ name, setName ] = useState(''); // Estado para name
    //----------------
    // Cuando se cambia el valor del campo de búsqueda
    const changeHanlder = (event) =>
    {
        setName(event.target.value); // Setea 'name' con el valor recibido
    };
    //----------------
    // Función para cuando se envía el formulario
    const submitHandler = (event) =>
    {
        event.preventDefault(); // No se reinicie la página
        //-------------------
        if (name.trim() === '') 
        {
            dispatch({ type: CLEAR_SEARCH_RESULTS });
            dispatch(getPokemons);
        }
        else
        {
            dispatch(getPokemonByName(name)); // Despacha la action que trae al pokemon por 'name'
            
        }
    };
    //----------------
    // Renderiza
    return(
        <div className = 'searchBar'>
            <form onSubmit = {submitHandler}>
                <input 
                    type = "search"
                    onChange = {changeHanlder}
                    value = {name}
                    placeholder = 'pokemon'
                    className = "search-input" 
                />
                <button type = 'submit' className = "search-button">S</button>
            </form>
            {console.log('estado TODOS los pokemon',pokemonsState)}
        </div>
        
    );
}
//-----------------------------------------------
export default SearchBar;
