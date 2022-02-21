"use strict";

function maiorIgual() {
    var n1 = parseInt(document.querySelector("#num1").value);
    var n2 = parseInt(document.querySelector("#num2").value);
    var res = 0;

    if (n1 > n2) {
        res = "O número " + n1 + " é maior que o número " + n2 + ".";
    }
    else if (n1 < n2) {
        res = "O número " + n2 + " é maior que o número " + n1 + ".";
    } else if(n1 == n2) {
        res = "Os números são iguais!";
    }

    document.querySelector("#resultado3").value = res;
}