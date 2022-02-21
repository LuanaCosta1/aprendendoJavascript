"use strict";


function txtSeparar() {
    var texto = document.querySelector("#txt").value
    var separar = texto.replace(/\s/g, "</br>");
    document.querySelector("#txtSaida").innerHTML= separar;
}

function txtMaiuscula(){
    var texto = document.querySelector("#txt").value
    var maiuscula = texto.toUpperCase();
    document.querySelector("#txtSaida").innerHTML= maiuscula;

}