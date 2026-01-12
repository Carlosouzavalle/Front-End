let nome_completo = "Carlos Eduardo Valle"
console.log(`Analisandoseu nome...`)
console.log(`Seu nome em Maiúsculas é ${nome_completo.toUpperCase()}`)
console.log(`Seu nome em Minúsculas é ${nome_completo.toLowerCase()}`)
console.log(`Seu nome tem ${nome_completo.length} letras`)
let arr = []
arr = nome_completo.split(" ", 2)
console.log(`Seu primeiro nome é ${arr[0]} e tem ${arr[0].length} letras`)