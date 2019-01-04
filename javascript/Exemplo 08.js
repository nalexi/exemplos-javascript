
function realizarLogin() {
    var login = document.getElementById("campo-login").value;
    var senha = document.getElementById("campo-senha").value;

    if (login == "kleitom" && senha == "123") {
        localStorage.setItem("logado", true);
        localStorage.setItem("nome",login);
        location.reload();
    }else {
        alert("Login e/ou senha invalidos");
    }
}

function apresentar(){
    if(localStorage.getItem("logado") == null){
        document.getElementById("form-login").style.display = "block";
    } else {
        document.getElementById("form-login").style.display = "none";

        var span = document.getElementById("usuario-logado");
        span.innerHTML = localStorage.getItem("nome");
    }
}

function sair(){
    localStorage.removeItem("nome");
    localStorage.removeItem("logado");
    location.reload();
}