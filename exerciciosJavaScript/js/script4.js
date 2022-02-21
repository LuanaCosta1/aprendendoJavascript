"use strict";

function areaRetangulo() {
    var bs = parseFloat(document.querySelector("#base").value);
    var al = parseFloat(document.querySelector("#altura").value);
    
    var area = (bs * al);

    document.querySelector("#resultado4").value = "A área do retângulo é igual a: " + (area.toFixed(2)) + "m";
}

function insereObs4(){
    document.querySelector('.obs4').innerHTML = 'Caso queira utilizar valores como 1.75m, utilize ponto ao invés de vírgula.';
}

function removeObs4(){
    document.querySelector('.obs4').innerHTML = "";
}
