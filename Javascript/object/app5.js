// os objetos eles não podem ser copiados da mesma forma de uma variavel

let cliente = {
    nome: 'carlos'
}

console.log(cliente.nome)

let cliente2 = cliente // objetos são copiados por referencia

console.log(cliente2.nome)

//=============================================================================

//não podemos criar um objeto e depois copiar ele pq vai afetar as propriedades

//temos dois metodos/maneiras de clonar objetos
let nomes1 = {
    nome: 'carlos'
}

let nomes2 = {}

for (let k in nomes1) {
    nomes2[k] = nomes1[k]
}

console.log(nomes1.nome)
console.log(nomes2.nome)

nomes2.nome = 'joao'

//aqui eles já vão ser diferentes pq cada um esta localizado em uma parte da memoria
console.log(nomes1.nome)
console.log(nomes2.nome)


// e o outro metodo/maneira
let usuario1 = {
    nome: 'marcelo'
}

let usuario2 = {}

// para o usuario dois eu quero uma clonagem do 1   
Object.assign(usuario2, usuario1)
console.log(usuario1.nome)
console.log(usuario2.nome)
usuario2.nome = 'ricardo'
// aqui cada um tem seu espaço na memoria
console.log(usuario1.nome)
console.log(usuario2.nome)



// // Temos dois objetos totalmente independentes.
// Dentro do ciclo for...in, a variável k representa as chaves do primeiro objeto (nomes1).
// Para cada chave, copiamos o valor correspondente para o segundo objeto (nomes2).
// Assim, os dois objetos passam a ter as mesmas propriedades, mas cada um ocupa seu próprio espaço na memória, ou seja, são independentes.


// ⚠️ Mas cuidado:
// Se o valor fosse um objeto dentro do outro, aí a referência seria compartilhada!


let a2 = { pessoa2: { nome: 'carlos' } }
let b2 = { }

for(let k2 in a2) {
    b2[k2] = a2[k2]
}

b2.pessoa2.nome = 'paulo'
console.log(a2.pessoa2.nome) 
// afetou o original
