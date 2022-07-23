$(function(){
    $('.carousel').carousel()
})


$(document).ready(function(){
var botonCorreo = $('#enviarMensaje');
botonCorreo.on('click', function(){
    alert("Mensaje enviado exitosamente. Te contactaremos a la brevedad!");})
})