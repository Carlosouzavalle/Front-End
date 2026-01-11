let valores = ['carlos', 'paulo', 'bia', 'ana']

embaralhado = [...valores].sort(() => Math.random() - 0.5)

console.log(embaralhado)
console.log(Math.random() - 0.5)

// array.sort(() => Math.random() - 0.5)
// A função do sort deve retornar:
// número negativo → a vem antes de b
// número positivo → b vem antes de a
// 0 → mantém

// Entenda essa linha
// array.sort(() => Math.random() - 0.5)


// A função do sort deve retornar:
// número negativo → a vem antes de b
// número positivo → b vem antes de a
// 0 → mantém

// 🎲 O que Math.random() gera
// Ele gera um número entre:
// 0.000... até 0.999...

// Se você fizer:
// Math.random() - 0.5

// O resultado fica entre:
// -0.5 até +0.5

// Exemplos:
// 0.1 - 0.5 = -0.4
// 0.9 - 0.5 = 0.4

// Isso faz com que às vezes o sort retorne:
// número negativo → troca posição
// número positivo → não troca
// Resultado: os itens ficam embaralhados aleatoriamente.

// 🧠 Intuição simples

// Imagine assim:
// O sort pergunta:
// “Esse item vem antes ou depois?”
// E a função responde aleatoriamente:
// às vezes “antes”
// às vezes “depois”
