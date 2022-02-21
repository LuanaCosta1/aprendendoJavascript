"use strict";

function calcMedia() {

    var n1 = parseFloat(document.querySelector("#nota1").value);
    var n2 = parseFloat(document.querySelector("#nota2").value);
    var n3 = parseFloat(document.querySelector("#nota3").value);
    var media = (n1 + n2 + n3) / 3;
    console.log(media);
    var resul = 0;

    if (media >= 6) {
        resul = "APROVADO";
        document.querySelector("#resultado5").style.color = 'green';
    } 
    else if (media >= 3 && media < 6) {
        resul = "EXAME";
        document.querySelector("#resultado5").style.color = 'grey';
    } 
    else if (media < 3) {
        resul = "REPROVADO";
        document.querySelector("#resultado5").style.color = 'red';
    }

    document.querySelector("#resultado5").value = "A média é " + (media.toFixed(2)) + " = " + resul;
}