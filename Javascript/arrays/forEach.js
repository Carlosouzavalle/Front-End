// O método forEach() executa uma função de callback uma vez para cada elemento do array.
// Ou seja: ele percorre o array do início ao fim, chamando uma função para cada valor.


/*

    array.forEach((elemento, índice, arrayOriginal) => {
        // código a ser executado
})


*/


let frutas = ['maça', 'pera', 'uva']
frutas.forEach(frutas => {
    console.log(frutas)
})


// usando o indice

frutas.forEach((valor, indice) => {
    console.log(`${indice}: ${valor}`)
})

// somando valores

let numeros = [1,2,3,4,5]
let soma = 0

numeros.forEach(numeros => {
    soma += numeros
})

console.log(soma)
// forEach() é ótimo pra fazer ações cumulativas (como somar, contar, etc.).

//===============================================================================
let resultado = [1, 2, 3].forEach(num => num * 2)

console.log(resultado) // undefined ❌

//================================================================================
let alunos = ["Carlos", "Ana", "Pedro"]

alunos.forEach((nome, i, arr) => {
  console.log(`${i + 1}º aluno: ${nome}`)
  console.log("Array atual:", arr)
})
