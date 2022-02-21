"use strict";

function criaTabela(){
	var linhas = document.querySelector("#linha").value
    var colunas = document.querySelector("#coluna").value
	var saida="";

	saida += "<table id='tbl'>";
	for (let i = 1 ; i <= linhas ; i++){
		saida += "<tr>";
		for (let j = 1 ; j <= colunas ; j++){
			saida += "<td>" + i + ", " + j + "</td>";
		}			
		saida += "</tr>";
	}	
	saida += "</table>";
	document.querySelector("#tabela").innerHTML = saida;
}


let btn1 = document.querySelector("#button1");
btn1.onclick =  criaTabela;