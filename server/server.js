const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express(); //inicializar express
let server = http.createServer(app); //servidor con la conf del express

const publicPath = path.resolve(__dirname, '../public'); //ruta para la carpeta publica
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //middleware para habilitar carpeta publica

//IO = Comunicación del backend  (inputs-output)
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});