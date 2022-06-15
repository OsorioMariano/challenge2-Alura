var botonJugar = document.querySelector(".jugar");
var botonAgregarPalabra = document.querySelector(".agregar-palabra");
var entradaPalabra = document.querySelector(".ingreso");
var botonEnviar = document.querySelector(".envio");
var botonCancelar = document.querySelector(".cancelar");
var advertencia = document.querySelector(".advertencia");
var palabrasJuego;
var palabrasCargadas = JSON.parse(sessionStorage.getItem("palabrasJuego"));



if(palabrasCargadas != null){ 
    palabrasJuego = palabrasCargadas;
}else{ 
    palabrasJuego = ["ecolocalizacion", "electrometalurgica", "anemometro", "escolastico", "afiligranado", "infinito", "mitocondria", "abeja", "coctelera", "astronauta"];
    window.sessionStorage.setItem("palabrasJuego", JSON.stringify(palabrasJuego)); 
}

botonJugar.addEventListener("click", function(){
    location.href = "juego.html";
});

botonAgregarPalabra.addEventListener("click",function(){
     botonJugar.classList.add("invisible");
     botonAgregarPalabra.classList.add("invisible")
 
     entradaPalabra.classList.remove("invisible");
     entradaPalabra.focus();
     botonEnviar.classList.remove("invisible");
     botonCancelar.classList.remove("invisible");
     advertencia.classList.remove("invisible");
 });

botonEnviar.addEventListener("click", function(){
    var palabraIngresada = entradaPalabra.value;
    var entradaValida = verificaEntrada(palabraIngresada);

    if(entradaValida){
        palabrasJuego.push(palabraIngresada);
        window.sessionStorage.setItem("palabrasJuego", JSON.stringify(palabrasJuego));
        location.reload();
    }
});

botonCancelar.addEventListener("click",function(){
    location.reload()
});


function verificaEntrada(palabra){
    var expresion = /[^a-z|ñ]/g;

    var soloLetras = !expresion.test(palabra);
    var minimoLongitud = (palabra.length>0)&&(palabra.length <= 23);

    if(soloLetras && minimoLongitud){
        var repetida = palabrasJuego.includes(palabra);

        if(!repetida){
            return true;
        }else{
            alert("Esta palabra ya se encuentra en el juego");
            entradaPalabra.value="";
            entradaPalabra.focus();
        }        
    }else{
        advertencia.classList.add("error");

        setTimeout(function(){
            advertencia.classList.remove("error");
        }, 1000);

        entradaPalabra.focus();
    }
}
