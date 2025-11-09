// O método concat() serve para combinar arrays (ou valores individuais) e retornar um novo array.
// splice(), ele não modifica os arrays originais.

let frutas = ['maça', 'pera']
let verduras = ['alface', 'couve']

let alimentos = frutas.concat(verduras)
console.log(alimentos)

//=================================================================

let numeros1 = [1,2]
let numeros2 = [3,4]
let numeros3 = [5,6]

let todos = numeros1.concat(numeros2, numeros3)
console.log(todos)


//======================================================================

// Você também pode passar valores diretos junto com os arrays:

let letras = ['a', 'b']
let alfabeto = letras.concat('c',['d','e'])
console.log(alfabeto)

//========================================================================

//Hoje em dia, é muito comum ver o uso do spread para fazer a mesma coisa:

let a = [1,2]
let b = [3,4]
let c = [...a,...b]
console.log(c)