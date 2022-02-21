$(function() {
    $("#btn").click(function(){
        pesqProprietario($("#propNome").val());
    });
});

function pesqProprietario(proprietario){
    let conteudo="";
    for (i = 0; i < detran.length ; i++){
        if (detran[i].proprietario.includes(proprietario.toString())){
            conteudo += "<div class='card' id='"+ detran[i].gravidade + "'>" + 
                        "<img src='" + detran[i].foto + "' class='imagem'>" +
                        "<div id='nome'>" +  detran[i].proprietario + "</div>" + 
                        "<div class='info'>" +
                        "<strong>Placa: </strong> " + detran[i].placa+"<br>" +
                        "<strong>CNH: </strong> " + detran[i].cnh+"<br>" + 
                        "<strong>Gravidade: </strong> " + detran[i].gravidade+"<br>" + 
                        "<strong>Pontos: </strong> " + detran[i].pontos+"<br>" + 
                        "<strong>Data: </strong>" + detran[i].data_infracao+"<br>" + 
                        "</div>" +
                        "<div class='valormulta'><strong>Valor: </strong>" + detran[i].valor + "</div>";
            conteudo += "</div>";
        }
    }
    $("#cards").html(conteudo);
}