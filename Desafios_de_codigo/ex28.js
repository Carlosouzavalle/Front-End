let numero = 0
let numeros = [0,1,2,3]

let aleatorio = Math.floor(Math.random() * numeros.length)

let numeroSorteado = numeros[aleatorio]

if(numeroSorteado == numero) {
    console.log("Você acertou")
} else {
    console.log("ta errado")
}