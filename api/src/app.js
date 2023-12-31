// Este módulo tiene la responsabilidad de crear el servidor
//----------------------------------------------
// Importación de módulos
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors'); // Comunicación 
//----------------------------------------------
// Conexión a la bd
require('./db.js');
//----------------------------------------------
// Creación instancia del servidor
const server = express();
//----------------------------------------------
// Nombre del servidor
server.name = 'API';
//----------------------------------------------
// Configuración middlewares
server.use(cors()); // Que venga cualquier cliente a comunicarse con el servidor
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => 
{
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//-------------------------------------
// Manejo de rutas
server.use(routes);
//-------------------------------------
// Middleware de manejo de errores
server.use((err, req, res, next) => 
{ // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
//-------------------------------------
// Exportación del servidor
module.exports = server;
