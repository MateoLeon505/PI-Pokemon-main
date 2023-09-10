// Este módulo tiene la responsabilidad de crear la conexión con la bd
// |-> configurar, definir y relacionar modelos utilizando el módulo Sequelize
//-------------------------------------
// Carga de variables de entorno
require('dotenv').config(); // lee el archivo .env (usuario, password y puerto)
//-------------------------------------
//Importación de módulos
const { Sequelize } = require('sequelize'); //para trabajar con bases de datos relacionales
const fs = require('fs'); // fs (para operaciones de archivo)
const path = require('path'); // path (para manipulación de rutas de archivo)
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; // configuración de la base de datos
//-------------------------------------
// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`, //Conexión BD
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
//-------------------------------------
// Obtención del nombre del archivo actual:
const basename = path.basename(__filename);
//-------------------------------------
// Carga de definiciones de modelos:
const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });
//-------------------------------------
// Asociación de las definiciones de modelos con la conexión
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
//-------------------------------------
// Capitalización de nombres de modelos
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
//-------------------------------------
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon, Type } = sequelize.models;
//-------------------------------------
// Aca vendrian las relaciones -> definir relaciones
// Relación muchos a muchos entre pokemon y types
Pokemon.belongsToMany(Type, { through: "pokemon_type" });
Type.belongsToMany(Pokemon, { through: "pokemon_type" });
//-------------------------------------
// Exportación de modelos y conexión
module.exports = {
   
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
 