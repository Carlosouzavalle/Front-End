// construtor do objeto

// Pensa que um objeto é como uma caixinha que guarda 
// coisas que pertencem a alguém ou algo.

// Exemplo:

// Imagina que você tem uma mochila.
// Dentro dela, tem várias coisas com nome e valor:

/*

const mochila = {
    cor: "azul",
    tamanho: "grande",
    peso: 2
}

mochila é o objeto
cor, tamanho, peso são as propriedades (ou “características”)
"azul", "grande", 2 são os valores dessas propriedades

esse exemplo de cima é literal

*/



function Pessoa(nm, ap, tlf) {
    this.nome = nm;
    this.apelido = ap;
    this.telefone = tlf;

    this.nome_completo = function() {
        return this.nome + " " + this.apelido
    }

    this.alterar_nome = function(novo_nome) {
        this.nome = novo_nome
    }
}

let cliente = new Pessoa('carlos', 'eduardo', 66654456)

console.log(cliente)
console.log(cliente.nome)
console.log(cliente.nome_completo())
cliente.alterar_nome("bia")
console.log(cliente.nome_completo())



/*
🏗️ 2. Objeto com Função Construtora
Usado quando você quer criar vários objetos com a mesma estrutura (como uma “fábrica”).

🔍 Características:
Criado com uma função especial (começa com letra maiúscula por convenção).
O operador new cria um novo objeto e atribui this à instância.
Permite criar múltiplas instâncias facilmente.

✅ Vantagens:
Reutilizável (cria vários objetos com o mesmo formato).
Base para entender classes no JavaScript moderno (ES6).

❌ Desvantagens:
Sintaxe um pouco mais verbosa.
this pode confundir iniciantes.
Antes do ES6, era a única forma de simular classes.


*/