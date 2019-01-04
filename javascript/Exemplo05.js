var id = 0;
var linhaOriginal = null;

function adicionarNaTabela() {

    var elementoNome = document.getElementById("campo-nome");
    var nome = elementoNome.value;
    //cria elemento tr

    if (linhaOriginal != null) {
        linhaOriginal.getElementsByClassName("coluna-nome")[0].innerHTML = nome;
        elementoNome = "";
        elementoNome.focus();
        linhaOriginal = null;
        return;
    }
    var linha = document.createElement("tr");
    //cria elemento td e adiciona conteudo interno
    var colunaCodigo = document.createElement("td");

    colunaCodigo.innerHTML = ++id;

    var colunaNome = document.createElement("td");
    colunaNome.className = "coluna-nome";
    colunaNome.innerHTML = nome;

    var colunaAcao = document.createElement("td");

    var botaoEditar = document.createElement("button");
    botaoEditar.innerHTML = "Editar";
    botaoEditar.addEventListener("click", editar);

    var botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "Excluir";

    botaoExcluir.addEventListener("click", apagar);

    colunaAcao.appendChild(botaoEditar);
    
    colunaAcao.appendChild(botaoExcluir);
    //adiciona elemento na linha

    linha.appendChild(colunaCodigo);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaAcao);

    //adiciona a linha no tbody
    //document.getElementById("minha-tabela").appendChild(linha);

    var primeiro = document.getElementById("minha-tabela").firstChild;
    document.getElementById("minha-tabela").insertBefore(linha, primeiro);
    //limpa o conteudo do campo nome e define focus

    //document.getElementById("campo-nome").value = "";
    //document.getElementById("campo-nome").focus();

    elementoNome.value = "";
    elementoNome.focus();
}
function editar() {
    var botao = event.target;
    var linha = botao.parentElement.parentElement;
    var elementoNome = linha.getElementsByClassName("coluna-nome")[0];
    document.getElementById("campo-nome").value = elementoNome.innerHTML;
    linhaOriginal = linha;
}

function apagar() {
    var desejaApagar = confirm("Deseja apagar");
    if (desejaApagar == true) {
        var botao = event.target;
        console.log(botao);
        var linha = botao.parentElement.parentElement;
        var pai = linha.parentElement;
        pai.removeChild(linha);
    }
}

function eventoEnter() {
    if (event.keyCode == 13) {
        adicionarNaTabela();
    }

}