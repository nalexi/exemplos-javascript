var valorTotalItem = 0;
var valorTotal = 0;
var id = 0;
function realizarLogin() {
    var login = document.getElementById("campo-login").value;
    var senha = document.getElementById("campo-senha").value;

    if (login == "a" && senha == "123") {
        localStorage.setItem("logado", true);
        localStorage.setItem("nome", login);
        location.reload();
    } else {
        alert("senha e/ou login invalidos");
    }
}

function mostrarTabela() {
    if (localStorage.getItem("logado") == null) {
        document.getElementById("form-login").style.display = "block";
        document.getElementById("usuario-logado").style.display = "none";
        document.getElementById("display-tabela").style.display = "none";
    } else {
        document.getElementById("form-login").style.display = "none";
        document.getElementById("usuario-logado").style.display = "block";
        document.getElementById("display-tabela").style.display = "block";

    }

    var span = document.getElementById("usuario-logado");
    span.innerHTML += localStorage.getItem("nome");
}

function sair() {
    localStorage.removeItem("nome");
    localStorage.removeItem("logado");
    location.reload();
}

function adicionarTabela() {

    valorTotal += valorTotalItem;

    var quantidade = document.getElementById("campo-quantidade").value;
    var valor = document.getElementById("campo-valor").value;

    var linha = document.createElement("tr");

    var id2 = localStorage.setItem("id", localStorage.getItem("id"));
    var colunaCodigo = document.createElement("td");
    colunaCodigo.innerHTML = id++;

    var colunaTipo = document.createElement("td");
    var escolha = document.getElementById("tipo-pecas");
    colunaTipo.innerHTML = escolha.options[escolha.selectedIndex].value;    

    var colunaQuantidade = document.createElement("td");
    colunaQuantidade.innerHTML = quantidade;

    var colunaValor = document.createElement("td");
    colunaValor.innerHTML = valor;

    var colunaTotal = document.createElement("td");
    colunaTotal.innerHTML = valorTotalItem;

    linha.appendChild(colunaCodigo);
    linha.appendChild(colunaTipo);
    linha.appendChild(colunaQuantidade);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaTotal);


    var primeiro = document.getElementById("tabela-principal").firstChild;
    document.getElementById("tabela-principal").insertBefore(linha, primeiro);
}


function resultado() {

}

function calcular() {
    var valor = document.getElementById("campo-valor").value;
    var quantidade = document.getElementById("campo-quantidade").value;
    quantidade = quantidade == "" ? 0 :  parseInt(quantidade);

    if(valor == ""){
        valor =  0;
    }else{
        valor = parseFloat(valor);
    }

    valorTotalItem = quantidade * valor;


    var result = document.getElementById("campo-total");
    result.innerHTML = "";
    result.innerHTML = "Total R$:" + valorTotalItem;
}

function eventoEnter() {
    if(event.keyCode == 13){
        realizarLogin();
    }
}

