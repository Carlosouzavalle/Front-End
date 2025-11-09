// os arrays sao copiados por referencia

let frutas1 = ['banana', 'maca', 'uva']
let frutas2 = frutas1
console.log(frutas1)
console.log(frutas2)
frutas2.push('laranja')
console.log(frutas1)
console.log(frutas2)
// como os dois apontam para o mesmo local na memoria
// qualquer alteração em um afeta o outro


// para clonar arrays podemos usar o metodo slice
// O método slice() retorna uma cópia parcial ou total de um array, sem alterar o original.
let frutas3 = frutas1.slice()
frutas3.push('kiwiiii')
console.log(frutas1)
console.log(frutas2)
console.log(frutas3)

//=========================================================================

// let numeros = [1,2,3,4,5]

// let parte = numeros.slice(1,4)
// console.log(parte)

// Começa no índice 1
// Vai até o índice 4 (mas não inclui o 4)


// indice negativos também vai funcionar

let numeros = [1,2,3,4,5]

let parte = numeros.slice(-2)
console.log(parte)
// -2 significa “comece dois antes do final”.

//===============================================================================
// cópia rápida com spread
let frutas = ['maça', 'uva', 'kiwi']
let copia = [...frutas]
console.log(copia)