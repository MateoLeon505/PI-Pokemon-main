// Este componente es el Landing Page
//----------------------------------------------
import './landing.css';
import { useHistory } from 'react-router-dom';
//----------------------------------------------
const Landing = () =>
{
    const history = useHistory();

    const handleButtonClick = () => 
    {
        history.push('/home'); // Redirige al enlace '/home' al hacer clic en el botón
    };

    return(
    <>
    <div className = "landing-images">
    <img src = "https://phantom-marca.unidadeditorial.es/10c286b7acf9a5a3bc72be2862268068/resize/1200/f/jpg/assets/multimedia/imagenes/2021/02/28/16145196328904.jpg" alt = "Pokemon APP"/>
    </div>
    <br />
    <button className='landingButton' onClick = {handleButtonClick}>
        Vamos!
    </button>
    </>
    );
}
//----------------------------------------------
export default Landing;