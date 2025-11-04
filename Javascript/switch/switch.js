// switch é uma estrutura que permite substituir múltiplos if...else quando se trata de comparar a mesma variável com diferentes valores.   

let i = 3;
switch(i) {
    case 1:
        console.log("O valor é 1");
        break;
    case 2:
        console.log("O valor é 2");
        break;
    case 3:
        console.log("O valor é 3");
        break;
    default:
        console.log("Valor não encontrado");
        break;
}

//==================================================================================================

// let numero = 2;

// switch(numero) {
//     case > 1:
//         console.log("O número é maior que 1");
//         break;
//     case 2:
//         console.log("O número é 2");
//         break;
//     default:
//         console.log("Número não identificado");
//         break;
// }

// Note que o switch não suporta expressões como "case > 1:", ele compara valores estritamente.



//==================================================================================================

let valor2 = 2;

switch(valor2) {
    case 1:
        console.log("O valor é 1");
        break;
    case '2':
        console.log("O valor é 2");
        break;
    default:
        console.log("Valor não encontrado");
        break;
}

// Neste exemplo, o case '2' não será executado porque o valor 2 (número) não é estritamente igual a '2' (string).



//==================================================================================================
//aninhar switch

let valor3 = 1;

switch(valor3) {
    case 1:
    case 2:
    case 3:
        console.log("O valor é 1, 2 ou 3");
        break;
    case 4:
        console.log("O valor é 4");
        break;
    default:
        console.log("Valor não encontrado");
        break;
}