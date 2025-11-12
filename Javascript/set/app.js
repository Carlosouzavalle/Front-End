/*
🧩 O que é um Set
Um Set é uma estrutura de dados (tipo um array especial) que:
Armazena valores únicos — não permite duplicatas.
Pode conter qualquer tipo de dado (números, strings, objetos etc.).
Mantém a ordem de inserção dos valores.

*/

const numeros = new Set([1,2,3,3,4,5])
console.log(numeros)

/*
Método	Descrição	Exemplo

.add(valor)	Adiciona um valor	numeros.add(5)
.delete(valor)	Remove um valor	numeros.delete(2)
.has(valor)	Verifica se o valor existe	numeros.has(3) → true
.clear()	Remove todos os valores	numeros.clear()
.size	Retorna a quantidade de elementos	numeros.size → 4

*/

// add
numeros.add(6)
console.log(numeros)

// delete
numeros.delete(6)
console.log(numeros)

// has
console.log(numeros.has(3))

// clear 
// numeros.clear()
// console.log(numeros)

// size 
console.log(numeros.size)



// 🔄 Convertendo entre Set e Array
// Às vezes você quer remover duplicatas de um array — o Set ajuda muito nisso 👇

const numeros2= [1,2,2,3,3,4,5]

const numerosUnidos = [...new Set(numeros)]

console.log(numerosUnidos)