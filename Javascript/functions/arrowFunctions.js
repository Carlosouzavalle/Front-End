/*
    È uma maneira mais moderna de usar funções 

    let funcao = (argumento) => expressão 

*/

let adicao = (a, b) => {
    return a + b
}
console.log(adicao(2, 3))

//==========================================================
let msg = () => 'Boas vindas'
console.log(msg())
//==========================================================
let msg2 = (nome) => `boas vindas${nome}`
console.log(msg2(' carlos'))
//==========================================================
let msg3 = (nome2) => {
    let saudar = "bom dia"
    return `${saudar}, ${nome2}`
}

console.log(msg3("carlos"))
