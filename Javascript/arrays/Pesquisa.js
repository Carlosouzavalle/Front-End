// metodos de pesquisa

// 🧩 1. includes() → verifica se o valor existe
// Retorna true ou false se o valor estiver presente no array.

let frutas = ['maça', 'pera', 'uva']

console.log(frutas.includes('maça'))
console.log(frutas.includes('maç'))


//===================================================================== 

// 🔎 2. indexOf() → busca o índice de um valor
// Retorna o índice do primeiro elemento encontrado — ou -1 se não achar.
// Serve pra localizar onde o valor está no array.

// let numeros = [1,2,3,4,5]
// console.log(numeros.indexOf(2))

//===================================================================== 

// 🔁 3. lastIndexOf() → índice da última ocorrência
// Se o valor aparece várias vezes, esse método retorna o último índice.

// console.log(numeros.lastIndexOf(3))

//======================================================================
// 🧠 4. find() → encontra o primeiro elemento que cumpre uma condição

// let idades = [15,16,17,18,19]

// let maiorDeIdade = idades.find(idade => idade >= 18)
// console.log(maiorDeIdade)


//======================================================================
// 🧮 5. findIndex() → encontra o índice do primeiro elemento que cumpre a condição

// let idades = [15,16,17,18,19]

// let maiorDeIdade = idades.findIndex(idade => idade >= 18)
// console.log(maiorDeIdade)


//==========================================================================

// 🎯 6. filter() → retorna todos os elementos que passam na condição

let idades = [12,17,19,25,30]
let adultos = idades.filter(idade => idade >= 18)
console.log(adultos)

// Diferente do find(), que retorna um só valor, o filter() retorna um novo array.

//==============================================================================

// 🧬 7. some() → verifica se algum elemento passa no teste

let numeros = [1,3,5,8]
let temPar = numeros.some(num => num % 2 === 0)
console.log(temPar)

// Retorna true se pelo menos um elemento cumprir a condição.

//=======================================================================

// 🧱 8. every() → verifica se todos os elementos passam no teste

let notas = [7,8,9,10]

let todosAprovados = notas.every(nota => nota >= 7)
console.log(todosAprovados)


/*



🧩 Resumo rápido

Método	Retorna	O que faz
includes()	boolean	Verifica se o valor existe
indexOf()	número	Índice do valor
lastIndexOf()	número	Último índice do valor
find()	valor	Primeiro que passa na condição
findIndex()	número	Índice do primeiro que passa
filter()	array	Todos que passam na condição
some()	boolean	Se algum passa
every()	boolean	Se todos passam


*/