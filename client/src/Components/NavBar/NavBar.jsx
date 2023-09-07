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
            <div>
                <span className = 'blanco'> P</span> 
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt = "PokeBall" className = 'image'/>
                <span className = 'blanco'>KE</span>
                <span className = 'rojo'>   APP</span>
            </div>
            <NavLink to = "/" > Pokemons </NavLink>
            <NavLink to = "/home" > Home </NavLink>
            <NavLink to = "/create" > Crear </NavLink>
        </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default NavBar;