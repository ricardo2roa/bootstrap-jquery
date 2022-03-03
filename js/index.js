$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause'); //Si se hace click sobre el boton se pausa el carusel
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        }else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle'); //Si se hace click sobre el boton se pausa el carusel
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause')
        }
    });
    /*
    $('#carousel-play').click(function(){
        $('#mycarousel').carousel('cycle'); //Si se hace click sobre el boton se reanuda el carusel
    });*/
    $("#btn-reserva").click(function(){
        $("#reservaModal").modal("show");
    });
    $("#btn-login").click(function(){
        $("#loginModal").modal("show");
    });
    $("#btn-close").click(function () {
        $("#reservaModal").modal("hide");
    });
    $("#btn-closelogin").click(function () {
        $("#loginModal").modal("hide");
    });
});