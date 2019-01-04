function apresentarPJ() {
    document.getElementById("pessoa-juridica").style.display = "block";
    document.getElementById("pessoa-fisica").style.display = "none";

    document.getElementById("campo-nome").value ="";
    document.getElementById("campo-cpf").value ="";

    document.getElementById("campo-razao-social").focus();
}

function apresentarPF() {
    document.getElementById("campo-razao-social").value ="";
    document.getElementById("campo-cnpj").value ="";

    document.getElementById("campo-nome").focus();
    
    document.getElementById("pessoa-fisica").style.display = "block";
    document.getElementById("pessoa-juridica").style.display = "none";
}