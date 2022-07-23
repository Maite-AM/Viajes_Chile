$(function(){

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

    $('.carousel').carousel();

    $(document).ready(function(){
        var botonCorreo = $('#enviarMensaje');
        botonCorreo.on('click', function(){
            alert("Mensaje enviado exitosamente. Te contactaremos a la brevedad!");})
        });

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip({
            placement : 'top'
        });
    });

  });


  