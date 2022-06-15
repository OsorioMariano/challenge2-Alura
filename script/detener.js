var botonCambiarPalabra = document.querySelector(".cambiar-palabra");
var imgGanador = document.querySelector(".imagen-ganador");
var canvasMensaje = document.querySelector(".mensaje");

canvasMensaje.width = 300;
canvasMensaje.height = 370;

var ctxMensaje = canvasMensaje.getContext("2d");
var mitadCavMensaje = canvasMensaje.width/2;

ctxMensaje.beginPath();

var ganadas;

if(cantidadGanadas !== null){
    ganadas = cantidadGanadas;
}else{
    ganadas = [];
}


function detenerJuego(estado){
    window.removeEventListener("keydown",colocarCoincidencias);

    if(estado === "gano"){
        ganadas.push(indiceActual);
        window.sessionStorage.setItem("ganadas", JSON.stringify(ganadas)); 
        
        canvasErrores.classList.add("invisible");
        canvasAhorcado.classList.add("invisible");
        imgGanador.classList.remove("invisible");
        
        ctxMensaje.fillStyle ="seagreen";
        ctxMensaje.font = "30px Nova Mono";

        if(ganadas.length == palabarasParaSortear.length){
            sessionStorage.removeItem("ganadas");
            botonCambiarPalabra.classList.add("invisible");
            ctxMensaje.textAlign = "center";

            ctxMensaje.fillText("Felicitaciones", mitadCavMensaje, 250);
            ctxMensaje.fillText("HAS FINALIZADO", mitadCavMensaje, 310);
            ctxMensaje.fillText("TODAS LAS PALABRAS", mitadCavMensaje, 340);
        }else{
            
            ctxMensaje.fillText("Felicitaciones", 25, 200);

            ctxMensaje.font = "35px Nova Mono";
            ctxMensaje.fillText("¡¡ GANASTE !!", 25, 260);
        }        

    }else{
       
        ctxMensaje.fillStyle ="rgba(255, 0, 0, 0.762)"; //orangered       

        ctxMensaje.textAlign = "center";

        ctxMensaje.font = "35px Nova Mono";
        ctxMensaje.fillText("Fin del Juego", mitadCavMensaje, 170);

        ctxMensaje.font = "30px Nova Mono";
        ctxMensaje.fillText("Vuelve a", mitadCavMensaje, 290);
        ctxMensaje.fillText("intentarlo", mitadCavMensaje, 320);
    }
}

botonCambiarPalabra.addEventListener("click", function(){
    location.reload();
});


