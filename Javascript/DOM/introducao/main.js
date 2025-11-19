function clicar() {
    console.log('cliclou')
    // document.getElementsByClassName("butao")[0].textContent = "AQUI FOI"
    document.querySelector(".butao").textContent = "tralala"
}

document.getElementById("butao").addEventListener("click", function() {
    document.getElementById("butao").textContent = "RECEBA"
})

const divs = document.querySelectorAll("div")

divs.forEach(div => {
    div.addEventListener("click", function () {
        div.style.background = "blue"
    })
})



// ❌ Erro 1: getElementsByClassName não usa ponto
// document.getElementsByClassName(".butao")

// Jeito certo
//document.getElementsByClassName("butao")

//❌ Erro 2: getElementsByClassName retorna uma lista, não um único elemento
//Ele devolve um HTMLCollection, tipo um “pacote de elementos”.
// Para acessar o primeiro botão, você tem que fazer:

// document.getElementsByClassName("butao")[0].textContent = "AQUI FOI"
// Use quando quiser selecionar vários elementos de uma classe, mas lembre-se:

//======================================================

// ❌ 1. querySelectorAll() NÃO retorna um único elemento
// Ele retorna uma lista (NodeList), como um array.
// Uma lista não pode receber .addEventListener() diretamente.

//=====================

// ⭐ DICA DE OURO: use querySelector
// Ele funciona igual ao CSS e pega só um elemento:



// A gente podia utilizar também 

// pela tag
// document.getElementsByTagName("p")


// todos os elementos seja classe, id, ou tag
//document.querySelectorAll("button")
