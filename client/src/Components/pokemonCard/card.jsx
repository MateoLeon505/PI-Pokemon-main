// Este componente tiene la responsabilidad de mostrar cards
//----------------------------------------------
//Importa los componentes necesarios de las bibliotecas
import { NavLink } from 'react-router-dom';
import './card.css';
//----------------------------------------------
// Define el componente
const Card = (props) =>
{
    return (
        <div className = 'cardContainer'>
            <p className = 'cardName'> {props.name}</p>
            <img src = {props.sprites} alt = {props.name} className = "cardImage" />
            <div className = "cardStats">

            </div>
        </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default Card;