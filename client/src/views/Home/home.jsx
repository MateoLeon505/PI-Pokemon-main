// Este componente es el Home 
//----------------------------------------------
// Importación de componentes y bibliotecas 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cards from "../../Components/CardsContainer/cards";
import { getPokemons } from '../../redux/actions';
//----------------------------------------------
const Home = () =>
{
    const dispatch = useDispatch();
    //-----------------------------
    useEffect(()=>
    {
        dispatch(getPokemons());
    },[dispatch]);
    //----------------------------- 
    return(
    <>
    <h1> Home </h1>
    <Cards/>
    </>
    );
}
//----------------------------------------------
// Exporta la función
export default Home;