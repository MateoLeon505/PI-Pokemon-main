// Este componente es la página Home de la aplicación
//----------------------------------------------
// Importación de componentes y bibliotecas 
import { useEffect, useState } from 'react'; // Para efecto secundario después de montar el componente
import { useDispatch, useSelector } from 'react-redux'; // Obtener el dispatch de redux
import Cards from "../../Components/CardsContainer/cards"; // Trae componente de Cartas
import { getPokemons, getPokemonTypes } from '../../redux/actions'; // Acciones para obtener pokemons y types
import Pagination from '../../Components/Pagination/Pagination';
//----------------------------------------------
const Home = () =>
{
    const dispatch = useDispatch(); // Para usar dispatch de redux
    const [ page, setPage ] = useState(1); // Estado para cambiar de página
    const [ pokemonsOnPage, setPokemonsOnPage ] = useState(12); // Num de Pokemons por página
    const allPokemons = useSelector((state) => state.pokemons.slice(0, pokemonsOnPage * page)); // Todos los pokemon
    const lastPokemon = Math.min(page * pokemonsOnPage, allPokemons.length);
    // const lastPokemon = page * pokemonsOnPage; // Último pokemon
    const firstPokemon = lastPokemon - pokemonsOnPage; // Primer pokemon
    const collectionPokemons = allPokemons.slice(firstPokemon, lastPokemon); // Array con Pokemons por Página
    const totalOfPages = Math.ceil(allPokemons.length / pokemonsOnPage); // Total páginas
    //-----------------------------
    // Se encarga de cambiar la página actual
    const pagination = (numberOfPage) =>
    {
        setPage(numberOfPage);
    };
    //-----------------------------
    const goToLastPage = () => 
    {
        setPage(totalOfPages);
    };
    //-----------------------------
      useEffect(() => 
    {
        setPage(1);
    }, [setPage, allPokemons.length]);
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
        <h1> Home </h1>
        <Cards collectionPokemons = {collectionPokemons}/>
        <Pagination
            pagination = {pagination}
            allPokemons = {allPokemons}
            pokemonsOnPage = {pokemonsOnPage}
            page = {page}
        >
        </Pagination>
    </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default Home;