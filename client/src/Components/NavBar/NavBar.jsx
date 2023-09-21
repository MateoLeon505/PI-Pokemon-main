// Este componente tiene la responsabilidad de crear la barra de navegación
//----------------------------------------------
//Importa los componentes necesarios de las bibliotecas
import { NavLink, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';
import './NavBar.css';
import Pokeball from '../../images/Pokeball.png';
//----------------------------------------------
// Define el componente
const NavBar = () =>
{
    //Ubicación
    const location = useLocation();
    //-----------
    return (
        <div className = 'mainContainer'>
            <div>
                <span className = 'blanco'>POKE</span> 
                <span className = 'rojo'>   APP</span>
            </div>
            {location.pathname === '/home' && <SearchBar></SearchBar>}
            <NavLink to = "/home" className = "icons"> h  </NavLink>
            <NavLink to = "/create" className = "icons" > d </NavLink>
            <NavLink to = "/create" className = "icons"> H </NavLink>
            <NavLink to = "/create" className = "icons2"> I </NavLink>
            <NavLink to = "/" > <img src = {Pokeball} alt = "PokeBall" className = 'image'/> </NavLink>
        </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default NavBar;