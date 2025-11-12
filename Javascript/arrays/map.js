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

const usuarios = [
  {nome: 'carlos', idade: 27 },
  {nome: 'ana', idade: 27 },
  {nome: 'bia', idade: 27 },
]

const nomes = usuarios.map(usuario => usuario.nome)

console.log(nomes)

//===============================================================================================

// exemplo com indice

const numeros2 = [10,20,30]
const resultado2 = numeros2.map((valor, indice) => valor + indice)

console.log(resultado2)


//==============================================================================================================
const numeros3 = [1, 2, 3]
const errado = numeros3.map(num => { num * 2 })
const certo = numeros.map(num => num * 2)
console.log(errado) // [undefined, undefined, undefined]
console.log(certo)


// 💡 Dica prática

// Use map() quando:
// Você quer transformar dados (ex: converter, formatar, multiplicar etc.).
// Você precisa gerar um novo array a partir de outro.


// ⚠️ Importante:
// map() sempre retorna um novo array.
// Se você não retornar nada na função, o novo array vai ter valores undefined.