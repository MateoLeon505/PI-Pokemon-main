// Este componente tiene la responsabilidad de crear la barra de navegación
//----------------------------------------------
//Importa los componentes necesarios de las bibliotecas
import { NavLink } from 'react-router-dom';
import './NavBar.css';
//----------------------------------------------
// Define el componente
const NavBar = () =>
{
    return (
        <div className = 'mainContainer'>
            <NavLink to = "/" > Pokemons </NavLink>
            <NavLink to = "/home" > Home </NavLink>
            <NavLink to = "/create" > Crear </NavLink>
        </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default NavBar;