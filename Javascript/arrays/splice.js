// O método splice() serve para adicionar, remover ou substituir elementos dentro de um array.

// array.splice(início, quantidade, item1?, item2?, ...)

// remove elementos

// let frutas = ["maçã", "banana", "laranja", "uva"]
// frutas.splice(1, 2)
// console.log(frutas)

// Começa no índice 1 (banana)
// Remove 2 elementos → "banana" e "laranja"

//=================================================================================

let frutas = ["maçã", "banana", "laranja"]

frutas.splice(1, 0, "abacaxi", "kiwi")
console.log(frutas)

//=================================================================================

// substituir elementos

let numeros = [1,2,3,4,5]
numeros.splice(1,2,14,15)
console.log(numeros)


//=================================================================================
    //retorno do splice


let numeros2 = [12,13,14,15]
let removidos = numeros2.splice(2,3)
console.log(removidos)