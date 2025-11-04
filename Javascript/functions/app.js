// funções de modo geral elas servem para agrupar blocos de código que podem ser reutilizados várias vezes ao longo do programa.


// definição de uma função
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo ao nosso site.`;
}
// chamada da função
console.log(saudacao("Maria")); // Olá, Maria! Bem-vindo ao nosso site.
// não é necessário definir o tipo de dado do parâmetro ou do valor de retorno, o JavaScript lida com isso dinamicamente.

//===========================================================================================================
// uma  função sem parâmetros

function horaAtual() {
    const agora = new Date();
    return agora.toLocaleTimeString();
}
console.log("Hora atual:", horaAtual());

// mais poderia ser algo mais simples ainda pegando a ideia do primeiro exemplo
function diga_ola() {
    return "Olá!";
}
console.log(diga_ola()); // Olá!

//===========================================================================================================
// função com múltiplos parâmetros

function soma(a, b)  {
    return a + b;
}

console.log("Soma de 5 e 3 é:",soma(5, 3)); // Soma de 5 e 3 é: 8