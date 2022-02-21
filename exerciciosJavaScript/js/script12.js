"use strict";

var num = Math.floor(Math.random() * 100);
var N = 0;
var tentativas = 0;


function Adiv() {
    N = parseInt(document.querySelector("#numero12").value);
    tentativas++;

    if (N == num) {
        var res = "Parabéns! você acertou em " + tentativas + " tentativas.";
        tentarNov();
    } else if (N < num) {
        var res = 'Tente um número MAIOR';
    } else if (N > num) {
        var res = 'Tente um número MENOR';
    }

    document.querySelector("#resultado12").value = res;
}

function novAdiv() {
    location.reload()
    Adiv();
}

function limparAdiv() {
    document.querySelector("#jogo").reset();
}

function tentarNov(){
    document.querySelector("#novamente").style.display = "block";
}