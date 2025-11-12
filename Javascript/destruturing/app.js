// 🧩 O que é Destructuring
// Destructuring é uma forma rápida e elegante de extrair valores de arrays ou propriedades de objetos e armazená-los em variáveis.
// Em vez de acessar item por item manualmente, você “desmonta” o array ou objeto direto na declaração.


const numeros = [10,20,30]

// forma tradicional
const a = numeros[0]
const b = numeros[1]
const c = numeros[2]

// com destruturing
// const [x,y,z] = numeros

// console.log(x)
// console.log(y)
// console.log(z)


//=============================================================================================================
// pular valores

// const numeros2 = [10,20,30,40,50]

// const [primeiro, ,terceiro] = numeros2
// console.log(primeiro)
// console.log(terceiro)


//==============================================================================================================
// valor padrão

const [a2 = 5, b2 = 10] = [7]

// console.log(a2) // 7
// console.log(b2) // 10 (usou o valor padrão)



//================================================================================================================
// 🔸 Destructuring em Objetos

const pessoa = {
    nome: 'carlos',
    idade: 27,
    telefone: 123456789
}

// forma tradicional 
const nome1 = pessoa.nome
const idade1 = pessoa.idade

// com destruturing
const { nome, idade} = pessoa
// ⚙️ Renomear variáveis
const { nome: n, idade: i,} = pessoa
// valor padrão
const { profissao = 'DESCONHECIDO' } = pessoa

console.log(n)
console.log(i)
console.log(profissao)
console.log(pessoa.profissao = 'medico')
console.log(pessoa.salario = '10k')
console.log(pessoa)

// 🔁 Destructuring em Funções
// Você pode desestruturar os parâmetros diretamente.

function mostrarUsuario({nome, idade}) {
    console.log(`Nome: ${nome}, idade: ${idade}`)
}

const usuario2 = {nome: 'carlos', idade: 27}
mostrarUsuario(usuario2)