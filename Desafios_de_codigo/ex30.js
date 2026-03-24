// let numero = 5

// let verificador = numero % 2

// if(verificador == 0) {
//     console.log("È par")
//     console.log(verificador)
// } else {
//     console.log("È impar")
//     console.log(verificador)
// }

import PromptSync from "prompt-sync"
let promt = PromptSync(); // chama o prompt 

let valor = Number(promt("Digite seu valor: ")) // Transforma de texto para number

let verificador = valor % 2 

if(verificador === 0) {
    console.log("È par")
} else {
    console.log("È impar")
 
}



// 🎯 Resumo
// % 2 === 0 → par
// % 2 !== 0 → ímpar