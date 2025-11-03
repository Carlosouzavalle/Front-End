/*
    são condicionais em JavaScript:
    - if...else
    - switch
    - operador ternário

    o que são condicionais?
    são estruturas de controle que permitem executar diferentes blocos de 
    código com base em condições específicas.

*/

let a = 20;
let b = 100;

if (a > b) {
    console.log("a é maior que b");
} else {
    console.log("a não é maior que b");
}

// da pra por tudo em uma linha só
if (a > b) console.log("a é maior que b"); else console.log("a não é maior que b");
// mais não é legal fazer isso, deixa o código feio e difícil de ler