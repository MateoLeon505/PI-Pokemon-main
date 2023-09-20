// Este componente tiene la responsabilidad de crear la barra de búsqueda
//----------------------------------------------
// Importación módulos
import { useState } from 'react'; // Estado del componente
import { getPokemons, getPokemonByName } from '../../redux/actions'; // Para despachar acciones a Redux
import { useDispatch } from "react-redux"; // Dispatch de Redux
import './searchBar.css';
//----------------------------------------------
const SearchBar = () =>
{
    const dispatch = useDispatch(); //  Dispatch de Redux
    const [ name, setName ] = useState(''); // Estado para name
    //----------------
    // Cuando se cambia el valor del campo de búsqueda
    const changeHanlder = (event) =>
    {
        if (event.target.value === "") // Si no hay 'name' para buscar
        {
            dispatch(getPokemons); // Despacha la action para traer a TODOS los pokemon
        }
        setName(event.target.value); // Setea 'name' con el valor recibido
    };
    //----------------
    // Cuando se hace la búsqueda
    const searchHandler = () =>
    {
        dispatch(getPokemonByName(name)); // Despacha la action que trae al pokemon por 'name'
    };
    //----------------
    // Función para cuando se envía el formulario
    const submitHandler = (event) =>
    {
        event.preventDeafault(); // No se reinicie la página
        searchHandler(); // LLama a la función que busca al pokemon
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
                    placeholder = 'Nombre Pokemon'
                    className = "search-input" 
                />
                <button type = 'submit' className = "search-button">
                    Buscar
                </button>
            </form>
        </div>
    );
}
//-----------------------------------------------
export default SearchBar;
