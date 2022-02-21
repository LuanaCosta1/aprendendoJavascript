"use strict";

var Nm = document.querySelector("#nome").value;

function impRenda() {

    var slr = document.querySelector("#salario").value;
    var aliquota;

    if (slr < 1434) {
        impR = "Você está isento";
    } else if (slr >= 1434 && slr < 2150) {
        aliquota = 7.5;
    } else if (slr >= 2150 && slr < 2866) {
        aliquota = 15;
    } else if (slr >= 2866 && slr < 3582) {
        aliquota = 22.5;
    } else if (slr >= 3582) {
        aliquota = 27.5;
    }
    var impR = (slr * (aliquota / 100));
    var res = impR;

    document.querySelector("#resultado8").value = (res.toFixed(2)) + "R$";
}

function insereObsimposto(){
    document.querySelector('.obs8').innerHTML = 'Exemplo: R$ 3000,00 digite 3000 ou 3000.00';
}

function removeObsimposto(){
    document.querySelector('.obs8').innerHTML = "";
}