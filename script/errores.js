var canvasErrores = document.querySelector(".errores");

canvasErrores.width = 300;
canvasErrores.height = 450;

var ctxErrores = canvasErrores.getContext("2d");

ctxErrores.beginPath();
ctxErrores.fillStyle ="firebrick";
ctxErrores.font = "25px Arial";

ctxErrores.fillText("LETRAS", 50, 55);
ctxErrores.fillText("INCORRECTAS", 50, 95);

ctxErrores.font = "30px Nova Mono";

var registroErrores = [];
var posicionX = 50;
var posicionY = 200;
var iterador = 0;

function errores (letra){

    if(!registroErrores.includes(letra)){

        registroErrores.push(letra);

        dibujarHorca(registroErrores.length);

        if(iterador != 5){
            iterador++;
            ctxErrores.fillText(letra.toUpperCase(), posicionX * iterador, posicionY);        
        }else{
            iterador = 1;
            posicionY = posicionY + 50;

            ctxErrores.fillText(letra.toUpperCase(), posicionX * iterador, posicionY);
        }
    }
    
    if(registroErrores.length === 11){
        return true
    }
}