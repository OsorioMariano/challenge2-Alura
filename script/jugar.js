//canvas encargado de dibujar ahorcado
var canvasAhorcado = document.querySelector(".colgado");
canvasAhorcado.width = 450;
canvasAhorcado.height = 450;
var ctx = canvasAhorcado.getContext("2d");

function dibujarHorca(numero){

    if (numero<6){
        ctx.lineWidth = 3;
        ctx.fillStyle="lightcoral";
        switch(numero){
            case 1: ctx.rect( 50, 400, 180,  25); break; //base inferior 
            case 2: ctx.rect( 65, 385, 150,  15); break; //base superior
            case 3: ctx.rect(135,  25,  10, 360); break; //columna
            case 4: ctx.rect(145,  25, 160,  10); break; //biga
            case 5: ctx.rect(305,  25,  10,  60); break; //bajada        
        }
        ctx.fill();
        ctx.stroke(); 
    }else{
        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.strokeStyle="darkslategrey";

        switch(numero){
            case 6:  ctx.arc(310, 120, 35, 0, 2 * Math.PI); break; //cabeza
            case 7:  ctx.moveTo(310, 155);
                     ctx.lineTo(310, 300); break; //torso
            case 8:  ctx.moveTo(310, 175);
                     ctx.lineTo(260, 245); break; //brazo izquierdo
            case 9:  ctx.moveTo(310, 175);
                     ctx.lineTo(360, 245); break; //brazo derecho
            case 10: ctx.moveTo(310, 300); 
                     ctx.lineTo(265, 390); break; //pierna izquierda
            case 11: ctx.moveTo(310, 300);
                     ctx.lineTo(355, 390); break; //pierna derecha
        }
        ctx.stroke();
    } 
}



var reinicioLogo = document.querySelector(".logo");

reinicioLogo.addEventListener("click",function(){
    sessionStorage.removeItem("palabraS");
    sessionStorage.removeItem("indiceAnterior");
    sessionStorage.removeItem("ganadas");

    location.href ="index.html";
})


var palabarasParaSortear =  JSON.parse(sessionStorage.getItem("palabrasJuego"));
var indiceAnterior = parseInt(sessionStorage.getItem("indiceAnterior"));
var cantidadGanadas = JSON.parse(sessionStorage.getItem("ganadas"));
var palabraSorteada;
var indiceActual;

function elegirPalabraSecreta(palabras){
    var cantidadPalabras = palabras.length; 

    if(indiceAnterior >= 0){
        
        if(cantidadGanadas !== null){
            if(cantidadGanadas.length < cantidadPalabras-1){
                do{
                    indiceActual = Math.floor( Math.random() * cantidadPalabras);
                }while(cantidadGanadas.includes(indiceActual) || (indiceActual == indiceAnterior));
            }else{
                do{
                    indiceActual = Math.floor( Math.random() * cantidadPalabras);
                }while(cantidadGanadas.includes(indiceActual) );
            }
            
        }else{
            
            do{
                indiceActual = Math.floor( Math.random() * cantidadPalabras);
            }while(indiceActual == (indiceAnterior));
        }

    }else indiceActual = Math.floor( Math.random() * cantidadPalabras);

    window.sessionStorage.setItem("indiceAnterior", indiceActual);
    
    return palabras[indiceActual];
}

palabraSorteada = elegirPalabraSecreta(palabarasParaSortear);
posicionarGuiones(palabraSorteada);
llenarGuiones();