// literal do objeto

let cliente = {
    nome: 'carlos',
    apelido: 'eduardo',
    telefone: 55553435,

    nome_completo: function() {
        return this.nome + " " + this.apelido
    },

    alterar_nome: function(novo_nome) {
        this.nome = novo_nome
    }
}

console.log(cliente.nome)
console.log(cliente.nome_completo())
cliente.alterar_nome('bia')
console.log(cliente.nome_completo())


/*
    È a forma mais facil de criar objeto

🔍 Características:

Criado diretamente com {}.
Usado para representar dados estáticos ou simples.
Pode ter propriedades (chave: valor) e métodos (funções internas).
Ideal para objetos únicos (ex: config, user, produto etc).


✅ Vantagens:

Simples e rápido de escrever.
Ótimo para dados pequenos ou específicos.

❌ Desvantagens:
Não é reutilizável para criar vários objetos com a mesma estrutura.
(Você teria que copiar e colar o mesmo modelo várias vezes.)

*/