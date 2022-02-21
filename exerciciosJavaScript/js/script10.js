"use strict";

function calcFatorial() {
    var num = parseInt(document.querySelector("#numero10").value);
    var fatorial = 1;
    var saida = 1;

    for (fatorial = 1; fatorial <= num; fatorial++) {
        saida *= fatorial;
    }

    document.querySelector("#resultado10").value = num + "! = " + saida;

}