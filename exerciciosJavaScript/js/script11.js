"use strict";

function somaNum() {
    var num = parseInt(document.querySelector("#numero11").value);
    var saida = 0;
    var soma = 1;
    var res;
    
    if (num > 0) {
        for (soma = 1; soma <= num; soma++) {
            saida += soma;
            res = "Soma dos números inteiros existentes = " + saida;
        }
    } else {
        res = "Número inválido! Tente novamente.";
    }

    document.querySelector("#resultado11").value = res;

}