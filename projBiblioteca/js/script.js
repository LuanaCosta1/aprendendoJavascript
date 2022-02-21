$("#btn1").click(function(){
    let str_pesq = $("#pesq").val();
    let tipo_pesq = $("#tipo").val();
    pesquisar(str_pesq, tipo_pesq);
});

function pesquisar(str, tipo){
    $("#resultado").html("");
    for (let livro of biblioteca){
        switch(tipo){
            case "1":
                if (livro.titulo.indexOf(str) >= 0){
                    montaLivro(livro);
                }
                break;
            case "2":
                if (livro.classificacao == str){
                    montaLivro(livro);
                }
                break;
        }
    }
}

function montaLivro(livro){
    let autores ="";
    for(let autor of livro.autores){
        autores += autor.nome + "</br>";
    }
    $("#resultado").append(`
    <div class="card">
        <div class="titulo"> ${livro.titulo}</div> <br>
        <div class="conteudo">
            <div class="title-cont">Autor(es): </div>
            <ul class="autores">
                <li>${autores}
            </ul>
            <br>
            <div class="title-cont">Edição: </div>
            <ul class="edicao">
                <li>${livro.edicao}</li>
            </ul>
            <br>
            <div class="title-cont">Assunto: </div>
            <ul class="assunto">
                <li>${livro.assunto}</li>
            </ul>
        </div>
    </div>`
    );
}