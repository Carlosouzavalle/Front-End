// função construtora
function Pessoa(nm, sb, tlf) {
    this.nome = nm,
    this.sobrenome = sb,
    this.telefone = tlf


    this.nome_completo = function() {
        return this.nome + " " + this.sobrenome
    }
}

// this.nome = aqui 'nome' é uma propriedade e 'nm' é a variavel

// instancia
const cliente2 = new Pessoa('carlos', 'eduardo', 123456789)

console.log(cliente2.nome)
console.log(cliente2.sobrenome)
console.log(cliente2.nome_completo())


/*
💡 O que significa “instância”?
Uma instância é um objeto individual criado a partir de um modelo (construtor ou classe).

🧩 1. O que é o this

this é uma palavra-chave especial que representa o objeto atual que está executando o código.

Em outras palavras:
this aponta para o dono da função que está sendo executada.

Quando você usa o new, o JavaScript faz isso nos bastidores:
Cria automaticamente um objeto vazio → {}
Define que this aponta para esse objeto novo
Executa a função Pessoa
Retorna esse objeto e atribui à variável cliente


*/