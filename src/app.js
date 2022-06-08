const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql");
const myConnection  = require("express-myconnection")

const app = express();
//Import routes
const carteleraRoutes = require('./routes/cartelera');
const directoresRoutes = require('./routes/director');
const paisesRoutes = require('./routes/pais');
const tipoRoutes = require('./routes/tipo');
const peliculaRoutes = require('./routes/pelicula');
const { urlencoded } = require("express");

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//midelwares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Lomosaurio123', //Cambiar a la propia
    port: 3306,
    database: 'cine22',
    multipleStatements: true
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', carteleraRoutes);
app.use('/', directoresRoutes);
app.use('/', paisesRoutes);
app.use('/', tipoRoutes);
app.use('/', peliculaRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port: 3000');
});