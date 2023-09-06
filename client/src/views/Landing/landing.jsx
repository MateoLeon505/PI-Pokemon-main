// Este componente es el Landing Page
//----------------------------------------------
import './landing.css';
import { NavLink } from 'react-router-dom';
//----------------------------------------------
const Landing = () =>
{
    return(
    <>
    <div className = "landing-images">
    <img src = "https://phantom-marca.unidadeditorial.es/10c286b7acf9a5a3bc72be2862268068/resize/1200/f/jpg/assets/multimedia/imagenes/2021/02/28/16145196328904.jpg" alt = "Pokemon APP"/>
    </div>
    <br />
    <button className='landingButton'>
        <NavLink to ='/home'> Vamos! </NavLink> 
    </button>
    </>
    );
}
//----------------------------------------------
export default Landing;