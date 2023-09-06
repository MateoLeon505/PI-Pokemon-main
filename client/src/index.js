// La responsabilidad de este módulo es renderizar la aplicación
//----------------------------------------------
// Importa bibliotecas
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
//----------------------------------------------
// Aquí se renderiza
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
