// Este componente tiene la responsabilidad de crear la barra de navegación
//----------------------------------------------
//Importa los componentes necesarios de las bibliotecas
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';
import './NavBar.css';
import Pokeball from '../../images/Pokeball.png';
//----------------------------------------------
// Define el componente
const NavBar = ({ onSearch }) =>
{
    return (
        <div className = 'mainContainer'>
            <div>
                <span className = 'blanco'>POKE</span> 
                <span className = 'rojo'>   APP</span>
            </div>
            <SearchBar onSearch = {onSearch}></SearchBar>
            <NavLink to = "/home" > Home  </NavLink>
            <NavLink to = "/create" > Crear </NavLink>
            <NavLink to = "/create" > Favoritos </NavLink>
            <NavLink to = "/create" > About </NavLink>
            <NavLink to = "/" > <img src = {Pokeball} alt = "PokeBall" className = 'image'/> </NavLink>
        </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default NavBar;