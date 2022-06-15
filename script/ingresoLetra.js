function colocarCoincidencias(event){
    var teclaPrecionada = event.key;
    var entradaValida = validarEntrada(teclaPrecionada);
     
    if(entradaValida){
        var indicesLetra = indices(palabraSorteada, teclaPrecionada);
         
        if(indicesLetra.length > 0){
            completarLetras(palabraSorteada,indicesLetra);
        }else if(errores(teclaPrecionada)){
            detenerJuego("perdio");
        }
    }
}


function llenarGuiones(){
    window.addEventListener("keydown",colocarCoincidencias);
}


function validarEntrada (letra){
    var resultado = false;
    var expresion = /[a-z]|ñ/g;

    if(letra.length < 2 && expresion.test(letra)){
        resultado = true;
    }
    return resultado;
}


function indices(palabra, letra){
    var aciertos = [];

    for(var i = 0; i < palabra.length; i++){
        if(palabra.charAt(i) === letra){
            aciertos.push(i);
        }
    }
    return aciertos;
}
