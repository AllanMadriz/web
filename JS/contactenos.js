$(function(){
    // Estructura para controlar los datos del formulario y se envian mensajes segun el error
    $('#contact__form').validate({
        rules: {
            nombre:{
                required: true
            },
            telefono: {
                required: true,
                minlength: 8,
                maxlength: 8
            },telefono2: {
                required: true,
                minlength: 8,
                maxlength: 8
            },
            email:{
                required: true,
                email: true
            }
        }, //Mensajes segun lo faltante o erroneo
        messages: {
            nombre: {
                required: 'Favor escribir su nombre'
            },
            email: {
                required: 'Favor ingresar un email',
                email: 'Favor ingresar una dirección valida de email '
            },
            telefono: {
                required: 'Favor ingresar un número telefónico',
                minlength: 'Debe tener mínimo 8 dígitos',
                maxlength: 'Debe tener máximo 8 dígitos'
            },
            telefono2: {
                required: 'Favor ingresar un número telefónico',
                minlength: 'Debe tener mínimo 8 dígitos',
                maxlength: 'Debe tener máximo 8 dígitos'
            }
        }
    })

    // Funcion para recolectar la tecla y verificar que no sea un digito especial o numero
    $("#nombre").keypress(function (e) {
        var tecla = e.which;

        $("#lblError").html(""); 
        // Expresion para evitar numeros y letras
        var caracEspe = /^[A-Za-z]+$/;
        // Buscamos
        var esValido = caracEspe.test(String.fromCharCode(tecla));
        if (!esValido) {
            $("#lblError").html("Caracteres especiales y números no permitidos");
        }

        return esValido;
    });
})