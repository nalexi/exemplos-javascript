function valor() {
    var valor = document.getElementById("campo-valor").value;
    var quantidade = document.getElementById("campo-quantidade").value;
    quantidade = parseInt(quantidade);
    valor = parseFloat(valor);
    var valorTotalItens = quantidade * valor;
    return this.valorTotalItens;
}
