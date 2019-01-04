

function validar() {
    var valido = true;


    removerSpanErro();

    valido = validarNome();

    valido = validarIdade();

    if (valido == false) {
        event.preventDefault();
        return;
    }
}

function gerarSpan(texto, input) {
    var elementoSpan = document.createElement("span");
    elementoSpan.className = "texto-vermelho";
    elementoSpan.innerHTML = texto;
    input.parentElement.appendChild(elementoSpan);
}

function removerSpanErro() {
    var elementos = document.getElementsByClassName("texto-vermelho");
    for (var i = 0; i < elementos.length;) {
        var elemento = elementos[i];
        elemento.parentElement.removeChild(elemento);
        i = 0;
    }
}

function validarNome() {
    var inputNome = document.getElementById("campo-nome");
    if (inputNome.value == "") {
        inputNome.className = "vermelho";
        gerarSpan("campo nome deve ser preenchido", inputNome);
        return false;
    } else if (inputNome.value.length < 5) {
        inputNome.className = "vermelho";
        gerarSpan("campo deve conter mais que 5 caracteres", inputNome);
        return false;
    } else {
        inputNome.className = "verde";
        return true;
    }
}

function validarIdade() {
    var inputIdade = document.getElementById("campo-idade");

    if (inputIdade.value == "") {
        inputIdade.className = "vermelho";
        gerarSpan("Preencha campo", inputIdade);
        return false;
    } else {
        var idade = parseInt(inputIdade.value);
        if (idade < 0) {
            gerarSpan("idade nao pode ser negatva", inputIdade);
            return false;
            inputIdade.className = "vermelho";
        } else if (idade > 130) {
            gerarSpan("Idade nao pode ser maior que 130 anos", inputIdade);
            return false;
        } else {
            inputIdade.className = "verde";
            return true;
        }
    }
}

/*
document.getElementById("campo-nome").classList = document.getElementById("campo-nome").classList + " casa" 
"vermelho casa"
document.getElementById("campo-nome").classList += " casa" 
"vermelho casa casa"
document.getElementById("campo-nome").className

classname tras uma String
classlist tras um vetor, em caso de alteração
*/