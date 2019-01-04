var quantidade = 0;

function cliqueDaVaca() {
    if(quantidade +1 == 6){        
        alert("deu de boi");
        return;
    }
}

var elemento = document.createElement("h1");
elemento.innerText = "boi numero numero" + ++quantidade;
document.getElementById("vacas").appendChild(elemento);