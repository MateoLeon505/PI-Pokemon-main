// La responsabilidad de este módulo es configurar y definir la estructura del modelo
//--------------------------------------
// Importación de los tipos de datos necesarios
const { DataTypes } = require('sequelize');
//--------------------------------------
// Se exporta una función que define el modelo de Pokémon y lo enlaza con la conexión a Sequelize
module.exports = (sequelize) => 
{
  // Se define las propiedades del modelo, que corresponden a las columnas en la tabla de base de datos
  sequelize.define('pokemon', 
  {
    id: {
      type:DataTypes.UUID,  // Identificador único | Generado automáticamente
      defaultValue:DataTypes.UUIDV4, // Agrega un uuid aleatorio
      primaryKey: true, // Cada valor será unico | Nungún pokemon tendrá el mismo id
    },
    //---------------------
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Campo obligatorio
      unique:true, // El nombre de cada pokemon debe ser único
    },
    //---------------------
    sprites:{ // Cadena que almacenará la ruta de los sprites
      type:DataTypes.STRING,
       allowNull:false
    },
    //---------------------
    hp:{
       type:DataTypes.STRING,
       allowNull:false,
        validate: { // Positivos 0 - 999
        min: 0,
        max: 999
      }
    },
    //---------------------
    attack:{
        type:DataTypes.STRING,
       allowNull:false,
        validate: {
        min: 0,
        max: 999
      }
    },
    //---------------------
    defense:{
      type:DataTypes.STRING,
       allowNull:false,
        validate: {
        min: 0,
        max: 999
      }
    },
    //---------------------
    speed:{
      type:DataTypes.STRING,
       validate: {
        min: 0,
        max: 999
      }
    },
    //---------------------
    height:{
      type:DataTypes.STRING,
       validate: {
        min: 0,
        max: 999
      }
    },
    //---------------------
    weight:{
      type:DataTypes.STRING,
       validate: {
        min: 0,
        max: 999
      }
    },
    //---------------------    
    custom:{
      type : DataTypes.BOOLEAN,
      defaultValue:true,
    }

  },{timestamps:false}); // No se generan las marcas de tiempo "created_at" y "updated_at" en la bd
};
