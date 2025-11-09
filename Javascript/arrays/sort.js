// 🔢 sort() – Ordenar elementos
// O método sort() ordena os elementos de um array por padrão como texto (ordem alfabética).
// Para números, é comum passar uma função de comparação.

/*

array.sort((a, b) => {
  // retorna número negativo, zero ou positivo
})

*/

const frutas = ['banana', 'maçã', 'laranja']
frutas.sort()
console.log(frutas)

//==================================================================================
//exemplo com numeros

const numeros = [40,1,5,200]

numeros.sort((a,b) => a - b)
console.log(numeros)


numeros.sort((a,b) => b -a)
console.log(numeros)