// O método reduce() percorre todo o array e reduz os valores a um único resultado — pode ser uma soma, média, objeto, string concatenada, etc.


/*

array.reduce((acumulador, valorAtual, indice, arrayOriginal) => {
  // retorna o novo valor do acumulador
}, valorInicial)


acumulador → guarda o resultado da última iteração
valorAtual → o elemento atual do array
valorInicial → opcional (se não passar, o primeiro elemento vira o inicial)

*/


let numeros = [10,20,30,40,50]

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

console.log(soma)


// juntando todos os nomes em uma só frase

// const nomes = ['carlos', 'ana', 'bia']
// const frase = nomes.reduce((acc, nome) => acc +  ', ' + nome)
// console.log(frase)

//=====================================================================================
// reduceRight()
// Funciona igual ao reduce(), mas percorre o array da direita para a esquerda.

const letras = ['a','b','c']
const resultado1 = letras.reduceRight((acc, letra) => acc + letra)
console.log(resultado1)


// isArray serve para verificar se uma variável é realmente um array.

const numeros2 = [1,2,3]
const nome = 'carlos'

console.log(Array.isArray(numeros))
console.log(Array.isArray(nome))