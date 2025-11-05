// // o ciclo for é o mais usado na programação.


// // for(inicio; condição; incremento) {
//     // bloco de código a ser executado
// //}

//=======================================================================
// for(i = 0; i <= 10; i++) {
//     console.log(`o valor  é ${i}`)
// } 
// //=======================================================================
// //podemos também fazer da seguinte forma:
// let valor = 1;
// for(; valor <= 10; valor++) {
//     console.log(`o valor2 é: ${valor}`);
// }


// // da para enxugar mais ainda:
// let valor2 = 1;
// for(; valor2 <= 10; ) {
//     console.log(`o valor3 é: ${valor2++}`);
// }




// // intercalando o loop
// let valor4 = 1;
// for(; valor4 <= 10; valor4++) {
//     if(valor4 == 4) continue; //pula o número 4
//     console.log(`o valor4 é: ${valor4}`);   
// }

// // quebrar o ciclo
// let valor5 = 1;
// for(; valor5 <= 10; valor5++) {
//     if(valor5 == 5) break; //para o loop quando chegar no número 5
//     console.log(`o valor5 é: ${valor5}`);
// }


// // loop dentro de loop
// for(i =  1; i <= 5; i++ ) {
//     for(j = 1; j <= 3; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// sair de loops nomeados
// ciclo: for(i2 = 1; i2 <= 4; i2++) {
//     for(j2 = 1; j2 <= 3; j2++) {
//         if(i2 * j2 == 6) break ciclo;
//         console.log(`${i2} x ${j2} = ${i2 * j2}`);
//     }
// }