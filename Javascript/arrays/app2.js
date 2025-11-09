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
let frutas3 = frutas1.slice()
frutas3.push('kiwi')
console.log(frutas1)
console.log(frutas2)
console.log(frutas3)