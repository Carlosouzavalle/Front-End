const prompt = require('prompt-sync')();

let digite_algo = prompt('Digite algo? ')

console.log(`o tipo é ${typeof digite_algo}`)
let so_espacos = /^\s+$/.test(`${digite_algo}`)
console.log('só tem espaços: ' + so_espacos)
let convertido = Number(digite_algo)

let alfabetico = /^[a-zA-Z]+$/.test(digite_algo)
console.log('é alfabetico: ' + alfabetico)

let alfanum = /^[a-zA-Z0-9]+$/.test(digite_algo)
console.log('é alfanumerico: ' + alfanum)

let maiusculas  = /[A-Z]/.test(digite_algo)
console.log('Maiusculo: ' + maiusculas)

let minusculas = /[a-z]/.test(digite_algo)
console.log('Minusculas: ' + minusculas)

let captalizado = /^[A-Z]+$/.test(digite_algo)
console.log(captalizado)


if(!isNaN(convertido)) {
    console.log('é numero')
} else {
    console.log('é texto')
}





/*


^        // início da string
✔️ Verdadeiro se a string começar com A
Exemplos:
"Abacate" → ✅
"Banana" → ❌



[a-zA-Z]// letras minúsculas e maiúsculas
+        // uma ou mais


$        // fim da string
✔️ Verdadeiro se a string terminar com A
Exemplos:
"Casa" → ✅
"Abacate" → ❌


*/