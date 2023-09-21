// Este componente es la página Home de la aplicación
//----------------------------------------------
// Importación de componentes y bibliotecas 
import { useEffect, useState } from 'react'; // Para efecto secundario después de montar el componente
import { useDispatch, useSelector } from 'react-redux'; // Obtener el dispatch de redux
import Cards from "../../Components/CardsContainer/cards"; // Trae componente de Cartas
import { getPokemons, getPokemonTypes } from '../../redux/actions'; // Acciones para obtener pokemons y types
import  Pagination  from '../../Components/Pagination/Pagination';
import notfound from '../../images/notfound.gif' // Imagen Loading
//----------------------------------------------
const Home = () =>
{
    const dispatch = useDispatch(); // Para usar dispatch de redux
    const allPokemons = useSelector((state) => state.pokemons); // Lista de TODOS los pokemon
    const [ page, setPage ] = useState(1); // Número de página actual
    const pokemonsOnPage = 12; // Núm de pokemons por página
    //--------------
    const [ isLoading, setIsLoading ] = useState(true); // Estado de carga
    //--------------
    // Pokemons por página
    const collectionPokemons = allPokemons.slice(
        (page - 1) * pokemonsOnPage,
        page * pokemonsOnPage
    );
    const totalOfPages = Math.ceil(allPokemons.length / pokemonsOnPage); // Total páginas
    //-----------------------------
    // Resultados de búsqueda
    const searchResults = useSelector((state) => state.searchResults);

    // Se encarga de cambiar la página actual
    const changePage = (newPage) =>
    {
        setPage(newPage);
    };
    //-----------------------------
    // Efecto secundario que despacha las acciones 'getPokemons' y 'getPokemonTypes'
    useEffect(() => 
    {
        // Muestra la imagen de carga al iniciar la solicitud
        setIsLoading(true);

        // Realiza las solicitudes
        dispatch(getPokemons())
            .then(() => dispatch(getPokemonTypes()))
            .finally(() => {
                // Oculta la imagen de carga una vez que los datos se han cargado
                setIsLoading(false);
            });
    }, [dispatch]);
    //----------------------------- 
    // Renderiza 
    return(
    <div>
        <br />
        <br />
        <br />
        {
            isLoading 
            ?   <img src = {notfound} alt = "Loading..." />
            : 
                (
                    !searchResults || (Array.isArray(searchResults) && searchResults.length === 0)
                    ?
                        <>
                            <Cards collectionPokemons = {collectionPokemons}/>
                            <Pagination
                            totalOfPages = {totalOfPages}
                            pagination = {changePage}/> 
                        </>
                    :
                        <>
                            <Cards collectionPokemons = {searchResults}/>
                        </>
                )
        }
        {console.log("searchResultsAC:", searchResults)}
    </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default Home;