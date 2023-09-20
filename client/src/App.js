// La responsabilidad de este módulo es definir el componente 'App'
//----------------------------------------------
import { Switch, Route, useLocation } from 'react-router-dom';
import { Landing, Form, Home, Detail } from './views/index';
import { NavBar } from './Components/index';
import './App.css'; 
//----------------------------------------------
function App() 
{
  const location = useLocation(); // Ubicacíon

  return (
    <div className="App">
      { location.pathname !== '/' && <NavBar/> }
      <Switch>
        <Route exact path = '/' component = {Landing}/>
        <Route exact path = '/create' component = {Form}/>
        <Route exact path = '/home' component = {Home}/>
        <Route exact path = '/detail' component = {Detail}/>
      </Switch>
    </div>
  );
}
//----------------------------------------------
export default App; // Exporta la función
