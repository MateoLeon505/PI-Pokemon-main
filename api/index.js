// Puerto => Este módulo tiene la responsabilidad de iniciar la aplicación
//--------------------------------------
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//--------------------------------------
// Sincronizando todos las modelos a la vez
conn.sync({ alter: true }).then(() => 
{
  server.listen(3001, () => 
  {
    console.log('listening on port 3001'); // eslint-disable-line no-console
  });
});

