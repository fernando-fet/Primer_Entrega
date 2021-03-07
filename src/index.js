const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
        extname: 'hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/link', require('./routes/links'));
app.use('/admin', require('./routes/admin'));
app.use('/product', require('./routes/productos'));
app.use('/Categorias', require('./routes/Categorias'));
app.use('/event', require('./routes/eventos'));
app.use('/Noticias', require('./routes/noticias'));
app.use('/login', require('./routes/login'));
app.use('/Pedidos', require('./routes/pedidos'));
app.use('/Reser', require('./routes/reservaciones'));
app.use('/Direcciones', require('./routes/direcciones'));






//app.use('/Autos', require('./routes/carross'));


//public
app.use(express.static(path.join(__dirname, 'public')));


//inicia el server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});