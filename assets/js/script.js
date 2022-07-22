$(function(){

    $('.carousel').carousel()


    $("button").click(function(){
        alert("Me dieron click con JQuery");
        $("p").show();
        console.log($(".entradas").val())
    });

    $("p").dblclick(function(){
        $(this).hide()
    });


})