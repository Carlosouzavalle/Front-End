// let base = 2016;
// let anoAtual = 2026;

// let diferenca = anoAtual - base;

// if (diferenca % 4 === 0) {
//     console.log("Pode ser bissexto");
// } else {
//     console.log("Não é bissexto");
// }



// versão melhorada
let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("É bissexto");
} else {
    console.log("Não é bissexto");
}

