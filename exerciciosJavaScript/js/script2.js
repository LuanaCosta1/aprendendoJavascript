"use strict";

function validarNumero() {
    var num = parseInt(document.querySelector("#numero2").value);
    var res = 0;

    if (num % 2 == 0) {
        res = "O número " + num + " é par!";
        document.querySelector("#resultado2").style.color = 'rgb(0, 137, 172)';
    }
    else {
        res = "O número " + num + " é ímpar!";
        document.querySelector("#resultado2").style.color = 'rgb(0, 91, 114)';
    }

    document.querySelector("#resultado2").value = res;
}