// aqui a diferença é que o bloco de código será executado pelo menos uma vez,

contador = 0;
do {
    console.log(`Contador é: ${contador}`);
    contador++;
} while(contador <= 10);
// mesmo que a condição seja falsa desde o início.






// quebrar o ciclo
let numero = 1;
do {
    console.log(`Número é: ${numero}`);
    numero++;
    if(numero > 5) break;
} while(numero <= 10);