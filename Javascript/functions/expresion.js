let valor = function(nome) {
    return `Olá ${nome} bem-vindo ao site`
}

console.log(valor('carlos'))
//==========================================================================================

/*
Vantagens

Você pode armazenar uma função em:
Variáveis
Objetos
Arrays
E até passar como parâmetro para outras funções

*/


// const operacoes = [
//     function(a, b) { return a + b},
//     function(a, b) { return a - b}
// ]
// console.log(operacoes[0](5, 2))
// console.log(operacoes[1](5, 2))
//==========================================================================================

//Permite funções anônimas
// Nem sempre você precisa nomear a função.
// Ideal para callbacks ou funções curtas.

// setTimeout(function() {
//     console.log('Olá mundo')
// }, 2000);


//==========================================================================================
// Controle do escopo
// A função só existe após ser definida, o que ajuda a evitar comportamentos confusos de hoisting (içamento).

// console.log(soma(2, 3)) // vai dar erro

// const soma = function(a, b) {
//     return a + b
// }


//==========================================================================================

// Facilita o uso com funções de ordem superior
// Como map, filter, reduce, etc.

// const numeros = [1,2,3,4,5]
// const dobrados = numeros.map(function(n) {
//     return n * 2
// })

// console.log(dobrados)



//==========================================================================================


// Desvantagens

// Sem hoisting

// Diferente da Function Declaration, você não pode chamar a função antes de declará-la.
// Isso pode causar erro se a ordem do código não for respeitada.

//==========================================================================================

// Mais difícil de debugar (em alguns casos)
// Funções anônimas (sem nome) aparecem no stack trace do erro apenas como “anonymous function”, dificultando encontrar a origem do problema.

const teste = function() {
    throw new Error("Algo deu errado!")
}

teste()

//==========================================================================================

// Pode reduzir a clareza em códigos grandes
// Em projetos maiores, usar muitas function expressions anônimas pode deixar o código mais difícil de ler e entender.

//==========================================================================================

// Menos intuitiva para iniciantes
// Como a função é tratada como um valor (atribuída a uma variável), pode confundir quem está começando.