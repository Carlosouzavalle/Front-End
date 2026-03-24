let distancia = 210
let preco_passagem_menor = 0.5;
let preco_passagem_maior = 0.45;


if(distancia <= 200) {
    let valor = preco_passagem_menor * distancia;
    console.log(`Você tera que pagar: R$:${valor}`);
} else {
let valor = preco_passagem_maior * distancia;
    console.log(`Você está prestes a fazer uma viagem de ${distancia}KM`)
    console.log(`Você tera que pagar R$${valor}`);
}