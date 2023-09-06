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
    <img src = "../../images/landing-image.jpg" alt = "Pokemon APP"/>
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