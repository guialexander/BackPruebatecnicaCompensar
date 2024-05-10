//Importar Dependencias
const app = require('./app');
//poner servidor a escuchar peticiones a http
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running 🤖🚀:Alien: at http://localhost:${port}/`);
});

module.exports = app;


