//importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');

const bodyParser = require('body-parser')

const configs = require('./config');

const db = require('./config/database');

require('dotenv').config({path:'variables.env'})


db.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


//configurar express
const app = express();

//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];

//creamos variables para el sitio
app.locals.titulo = config.nombresitio;

//Muestra el año actual
app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta = req.path;
  console.log(res.locals)
  return next();
});


//ejecutar body parser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas
app.use('/', routes());

//habilitar pug
app.set('view engine', 'pug');

//añadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar carpeta start
app.use(express.static('public'));

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT  || 3000;

app.listen(port, host, () => {
  console.log('El servidor esta funcionando ' )
});

