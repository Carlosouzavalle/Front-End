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

// O ano não pode ser múltiplo de 100
// ano % 100 !== 0

// Exceção: se for múltiplo de 400 → É bissexto
// ano % 400 === 0

// 2024 % 4 === 0 → true
// 2024 % 100 !== 0 → true

// 1900 % 4 === 0 → true
// 1900 % 100 !== 0 → false


// 2000 % 4 === 0 → true
// 2000 % 100 !== 0 → false
// 2000 % 400 === 0 → true

// ✔️ Divide por 4
// ❌ Mas não por 100
// ✔️ A não ser que divida por 400