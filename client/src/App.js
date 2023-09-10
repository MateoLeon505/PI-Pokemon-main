// La responsabilidad de este módulo es definir el componente 'App'
//----------------------------------------------
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Landing, Form, Home, Detail } from './views/index';
import { NavBar } from './Components/index';
import { getPokemonTypes } from './redux/actions';
import './App.css'; 
//----------------------------------------------
function App() 
{
  const location = useLocation(); // Ubicacíon
  const dispatch = useDispatch(); // Despachar funciones

  // Despacha 'Types' de Pokemon
  useEffect(() =>
  {
    dispatch(getPokemonTypes());
  },[dispatch]);

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
