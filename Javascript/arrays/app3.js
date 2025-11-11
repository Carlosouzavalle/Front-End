// Reverse Inverte a ordem dos elementos de um array.

const numeros = [1,2,3,4,5]
numeros.reverse()
console.log(numeros)


//=========================================================================
// Split divide uma string em partes e transforma em um array, usando um separador.

const texto = 'aprender é divertido'
const palavras = texto.split(' ')

console.log(palavras)

const letras = 'ABCD'.split('')
console.log(letras)

//=============================================================================

// Faz o oposto do split() — junta os elementos de um array em uma string, com um separador.

const frase = palavras.join(' ')
console.log(frase)

//=================================================================================

// usando os 3 

const texto2 = 'javascript é legal'

const invertido = texto.split('').reverse().join('')

console.log(invertido)

