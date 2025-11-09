// 🗺️ map() – Criar um novo array transformado
// O método map() percorre todos os elementos de um array e retorna um novo array com o resultado da função aplicada a cada item.

/*

array.map((elemento, indice, arrayOriginal) => {
  // retorna algo
})


*/


const numeros = [1,2,3,4,5]
const dobrados = numeros.map(numero =>numero * 2)

console.log(dobrados)

// map() não altera o array original, ele cria um novo.
//======================================================================================

