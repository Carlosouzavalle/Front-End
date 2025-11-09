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


// uma variavel externa pode existir dentro de uma função 

// let nome = 'carlos';

// function mostrar_nome() {
//     console.log(nome)
//     nome = 'ana'
// }

// mostrar_nome()
// console.log(nome)


//uma variavel declarada dentro da função só existe
// dentro dela

// function nome_da_pessoa() {
//     let nome = 'Pedro';
//     console.log(nome);
// }

// nome_da_pessoa();
// console.log(nome)


// função com valores padrão

function soma2(a, b = 2) {
    return a + b
}

console.log(soma2(5))
console.log(soma2(5,5)) // caso eu passe o segundo valor ele vai ser substituido 



// paramentros por padrão indefinidos
// undefined || nullish

function apresentar_valor(valor) {
    // if(valor === undefined) valor = 100
    valor = valor || 100
    // valor ?? 5000 esse tipo de escrita funcionava no js mais recente
    console.log(valor)
}

apresentar_valor()
