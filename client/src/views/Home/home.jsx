// Este componente es la página Home de la aplicación
//----------------------------------------------
// Importación de componentes y bibliotecas 
import { useEffect, useState } from 'react'; // Para efecto secundario después de montar el componente
import { useDispatch, useSelector } from 'react-redux'; // Obtener el dispatch de redux
import Cards from "../../Components/CardsContainer/cards"; // Trae componente de Cartas
import { getPokemons, getPokemonTypes } from '../../redux/actions'; // Acciones para obtener pokemons y types
import  Pagination  from '../../Components/Pagination/Pagination';
import notfound from '../../images/notfound.gif'
//----------------------------------------------
const Home = () =>
{
    const dispatch = useDispatch(); // Para usar dispatch de redux
    const allPokemons = useSelector((state) => state.pokemons); // Lista de TODOS los pokemon
    const [ page, setPage ] = useState(1); // Número de página actual
    const pokemonsOnPage = 12; // Núm de pokemons por página
    // Pokemons por página
    const collectionPokemons = allPokemons.slice(
        (page - 1) * pokemonsOnPage,
        page * pokemonsOnPage
    );
    const totalOfPages = Math.ceil(allPokemons.length / pokemonsOnPage); // Total páginas
    //-----------------------------
    // Resultados de búsqueda
    const searchResults = useSelector((state) => state.searchResults);
    const [ homeView, setHomeView ] = useState(false); // Para un renderizado condicional
    console.log("searchResults:", searchResults);
    // Validación
    const isSearchResultEmpty = () =>
    {
        if (Array.isArray(searchResults))
        {
            return searchResults.length > 0;
        }
        else if (typeof searchResults === 'object')
        {
            return Object.keys(searchResults).length > 0;
        }
        return false;
    }
    // Comprueba si searchResults está vacío
    useEffect(() =>
    {
        setHomeView(isSearchResultEmpty());
    }, [searchResults]);
    //----------------------------- 
    // Se encarga de cambiar la página actual
    const changePage = (newPage) =>
    {
        setPage(newPage);
    };
    //-----------------------------
    // Efecto secundario que despacha las acciones 'getPokemons' y 'getPokemonTypes'
    useEffect(()=>
    {
        dispatch(getPokemons());
        dispatch(getPokemonTypes());
    },[dispatch]);
    //----------------------------- 
    // Renderiza 
    return(
    <div>
        <br />
        <br />
        <br />
        {
            !homeView
            ?
                <>
                    <Cards collectionPokemons = {collectionPokemons}/>
                    <Pagination
                    totalOfPages = {totalOfPages}
                    pagination = {changePage}/> 
                    <img src = {notfound} alt = "PokemonNotFound" />
                    <span>Pokemon No Encontrado</span>
                </>
            :
            <>
            <span>Error ni el hp</span>
            </>
        }
    </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default Home;