let nome = 'Carlos Silva de Souza'
let primeiro_espaco = nome.indexOf(' ')
let primeiro_espaco2 = nome.indexOf('c') // return -1 why???
let primeiro_espaco3  = nome.indexOf('C') // return 0
let ultimo_espaco = nome.lastIndexOf(' ')

console.log(primeiro_espaco3)
console.log(primeiro_espaco2)
console.log(ultimo_espaco)

let primeiro_nome = nome.slice(0, primeiro_espaco)

let ultimo_nome = nome.slice(ultimo_espaco - 9)
console.log(`Primeiro nome: ${primeiro_nome}`)
console.log(`Último nome: ${ultimo_nome}`)