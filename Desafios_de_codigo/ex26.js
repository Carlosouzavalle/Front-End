// let frase = "ana ama pedro"
// let num_ocorencias = (frase.match(/a/g) || []).length
// console.log(num_ocorencias)
// console.log(frase.indexOf("a"))
// console.log(frase.lastIndexOf("a"))


// poderia ser feito assim também 
let frase = "ana ama pedro"
let num_ocorencias = 0
for(let char of frase) {
    if(char === 'a') num_ocorencias++
    
}
console.log(num_ocorencias)
console.log(frase.indexOf('a'))
console.log(frase.lastIndexOf('a'))

