var socket = io();

/*on -> funcion:escuchar */
socket.on('connect', function() { //va a estar pendiente de la conexion y por consecuencia de algun cambio en el backend
    console.log('conectando al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');

});
/*emit->enviar informacioón al server*/
socket.emit('enviarMensaje', { //nombre del evento, objeto, funcion confirmacion
    usuario: 'Angel',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});
//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});