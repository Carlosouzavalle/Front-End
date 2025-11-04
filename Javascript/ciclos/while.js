// os loops em JavaScript: existem para repetir blocos de código enquanto uma condição for verdadeira.


// let contador = 0;
// while(contador <= 10) {
//     console.log(`Contador é: ${contador}`);
//     contador++;
// }

//podemos fazer tudo em uma linha só
let contador2 = 0; while(contador2 <=10)  console.log(`Contador2 é: ${contador2}`), contador2++;


//atenção cuidado para não fazer loops infinitos
let contador3 = 0;
while(contador3 <= 10) {
    console.log(`Contador3 é: ${contador3}`);
    //contador3++; //se tirar esse incremento, o loop nunca vai acabar
}