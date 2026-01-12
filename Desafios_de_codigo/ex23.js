// versão limitada

// let numero = 3234
// let num = numero.toString()


// if (num.length > 3) {
//     console.log(`O valor ${numero} tem ${num[3]} unidades`)
//     console.log(`O valor ${numero} tem ${num[2]} dezenas`)
//     console.log(`O valor ${numero} tem ${num[1]} centenas`)
//     console.log(`O valor ${numero} tem ${num[0]} milhar`)
// } else if (num.length > 2) {

//     console.log(`O valor ${numero} tem ${num[2]} unidades`)
//     console.log(`O valor ${numero} tem ${num[1]} dezenas`)
//     console.log(`O valor ${numero} tem ${num[0]} centena`)
// } else if(num.length > 1) {
//     console.log(`O valor ${numero} tem ${num[1]} unidades`)
//     console.log(`O valor ${numero} tem ${num[0]} dezenas`)
// }



let numero = 32342000000
let num = numero.toString()

const casas = [
    'unidades',
  'dezenas',
  'centenas',
  'milhar',
  'dezenas de mil',
  'centenas de mil',
  'milhão',
  'dezenas de milhão',
  'centenas de milhão',
  'bilhão'
]

for (let i = 0; i < num.length; i++) {
  const digito = num[num.length - 1 - i]
  const nome = casas[i] || `10^${i}`

  console.log(`O valor ${numero} tem ${digito} ${nome}`)
}

