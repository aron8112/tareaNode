//INICIALIZACIÓN DE LA APP
const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

//IMPORTAR ROUTER
const apiRouter = require('./routes');

//MIDDLEWARES
//LOG DE LAS PETICIONES
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'reg-peticiones-http.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }))



app.get('/', (req, res) => {
    res.status(200).json({
        message:
            'Bienvenido a la APP Librería de Tarea para Node - XAcademy',
    });
});
app.use('/api/v1', apiRouter);

app.listen(PORT, async () => {
    console.log(`Server running in ${PORT}`);
});
