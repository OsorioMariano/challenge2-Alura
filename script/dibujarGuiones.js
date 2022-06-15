var canvasGuiones = document.querySelector(".guiones");
var ctxGuion = canvasGuiones.getContext("2d");

canvasGuiones.width = 1450;
canvasGuiones.height = 100;

var anchoGuion = 50;
var separacionGuiones = 70;


function dibujarGuion(x, y, color){
    ctxGuion.lineWidth = 8;

    ctxGuion.moveTo(x, y);
    ctxGuion.lineTo(x + anchoGuion, y);
    
    ctxGuion.strokeStyle = color;
    ctxGuion.stroke();
}

function primerGuion(palabra){
    var mitadPalabra = palabra.length / 2;
    var mitadCanvas = canvasGuiones.width / 2;

    return mitadCanvas - ( mitadPalabra * (anchoGuion + 10) );
}


function posicionarGuiones(palabra){
    var indice = 0;    
    var guion = primerGuion(palabra);

        while(guion < ( canvasGuiones.width - 60 ) && indice < palabra.length){
            dibujarGuion(guion, separacionGuiones,"cadetblue");
            guion+= anchoGuion + 10;
            indice++;
        }  
        
}


//codigo para completar la palabra sobre los guiones

ctxGuion.beginPath();
ctxGuion.fillStyle ="black"; //dimgray
ctxGuion.font = "30px Nova Mono";


var aciertosIngresos = 0;
var repeticiones = [];


function completarLetras(palabra, coincidencias){ 
    var indice = 0;
    var posicionGuion;
    var indiceGuion = primerGuion(palabra) + 24.5;
    
    if(!repeticiones.includes(coincidencias[indice])){
        repeticiones.push(coincidencias[indice]);

        aciertosIngresos += coincidencias.length;

        while(indice < coincidencias.length){
            posicionGuion = indiceGuion + (60 *(coincidencias[indice]));

            ctxGuion.fillText(palabra.charAt(coincidencias[indice]).toUpperCase(), posicionGuion, 60);     

            indice++; 
        }
    }

    if(aciertosIngresos === palabraSorteada.length){
        detenerJuego("gano");
    }

}


