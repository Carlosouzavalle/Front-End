let word = '   Sa N o antonio'
let answer_word = /santo/.test(word.toLowerCase().replace(/\s+/g,""))

console.log(answer_word)

// =>  \s = qualquer espaço em branco
// =>   +  uma ou mais
// =>   g significa global

// /\s+/g encontre todos os grupos de espaços e remova


let word2 = 'santo amaro'
let resp2 = word2.toLowerCase().replace(/\s+/g, "")
let answer2 = resp2.includes("santo")
console.log(answer2)