import PromptSync from "prompt-sync";

const prompt = PromptSync();

let velocidade = Number(prompt("Digite a velocidade: "));
let limite = 80;
let multa = 7;

let multaCalculo = (velocidade - limite) * multa;

if (velocidade > limite) {
    console.log(`Você ultrapassou o limite de ${limite}. Terá que pagar uma multa de R$ ${multaCalculo}`);
} else {
    console.log("Velocidade dentro do limite.");
}