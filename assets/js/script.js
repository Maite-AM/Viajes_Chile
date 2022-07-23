$(function(){

    // Código para "navegar" entre secciones
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
  
    $('[data-toggle="popover"]').popover();

    //Carousel
    $('.carousel').carousel();

    //Mensaje tipo "ALERTA", una vez que se hace click en botón "Enviar", en sección "Contacto"
    $(document).ready(function(){
        var botonCorreo = $('#enviarMensaje');
        botonCorreo.on('click', function(){
            alert("Mensaje enviado exitosamente. Te contactaremos a la brevedad!");})
        });
    
    //Tooltip - Mensaje sobre íconos del footer
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip({
            placement : 'top'
        });
    });

  });


  