$(function(){
    // Para cada uno de los 3 botones usamos la misma funcion, lo que hace es un smooth scroll hacia abajo al presionar el boton
    $('#btn__scroll1').click(function(e){
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    })

    $('#btn__scroll2').click(function(e){
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    })

    $('#btn__scroll3').click(function(e){
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    })

    //Buscamos creamos los valores que necesita la libreria Typed para hacer la animacion del inicio 
    var typed = new Typed('.th2', {
        strings: [
          'Confianza',
          'Excelencia',
          'Seguridad'
        ],
        typeSpeed: 60,
        backSpeed: 70,
        loop: true
    })

})