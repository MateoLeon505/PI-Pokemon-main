// Este componente es la página Home de la aplicación
//----------------------------------------------
// Importación de componentes y bibliotecas 
import { useEffect, useState } from 'react'; // Para efecto secundario después de montar el componente
import { useDispatch, useSelector } from 'react-redux'; // Obtener el dispatch de redux
import Cards from "../../Components/CardsContainer/cards"; // Trae componente de Cartas
import { getPokemons, getPokemonTypes } from '../../redux/actions'; // Acciones para obtener pokemons y types
import  Pagination  from '../../Components/Pagination/Pagination';
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
        <Cards collectionPokemons = {collectionPokemons}/>
        <Pagination
            totalOfPages = {totalOfPages}
            pagination = {changePage}/>
    </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default Home;