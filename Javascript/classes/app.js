// 🧱 O que é uma classe?
// Uma classe é como um molde (ou modelo) que serve para criar vários objetos com as mesmas propriedades e comportamentos.

// Pensa assim:
// A classe é a “forma do bolo”, e os objetos são os “bolos prontos”.


/*


class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}




class Pessoa → define a classe.
constructor() → método especial executado quando o objeto é criado.
this.nome e this.idade → criam propriedades únicas para cada instância.
falar() → é um método, ou seja, uma função dentro da classe.

*/


class Pai {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }


    falar() {
        console.log(`Oi meu nome é ${this.nome + " " + this.sobrenome}`)
    }
}

const pai1 = new Pai('Carlos', 'eduardo')
pai1.falar()


class filho extends Pai {
    constructor(nome, sobrenome, nomePai, sobrenomePai) {
        super(nome, sobrenome)
        this.nomePai = nomePai
        this.sobrenomePai = sobrenomePai
    }

    falar2() {
        console.log(`Oi meu nome é ${this.nome + " " + this.sobrenome} e sou filho(a) 
        do ${this.nomePai + " " + this.sobrenomePai} `)
    }
}

const filho1 = new filho('bia', 'eduardo', 'carlos', 'eduardo')
filho1.falar2()


// extends → permite herdar métodos e propriedades da classe pai.
// super() → chama o construtor da classe pai.
// this → representa a instância atual (filho, nesse caso).
// Parâmetros adicionais no constructor podem representar novas informações específicas da subclasse.

// 🧩 O que é super

// 👉 super é uma palavra-chave que se refere à classe pai (ou classe base) dentro de uma classe filha.
// Ela serve pra acessar o construtor ou métodos da classe pai.

// 🚀 Usos principais
// 1. Chamar o construtor da classe pai
// Quando você cria uma subclasse (extends), o super() é usado dentro do constructor para chamar o construtor da classe pai.
// 📘 Sem o super(nome), o JavaScript não sabe como inicializar a parte herdada do Pai, e isso causa erro.


// 2. Chamar métodos da classe pai
// Você também pode usar super fora do construtor, para acessar métodos que vieram da classe pai.
// Aqui o super.falar() chama o método original da classe Pai, e depois o filho adiciona o próprio comportamento.

class Pai {
  falar() {
    console.log("Sou o pai.");
  }
}

class Filho extends Pai {
  falar() {
    super.falar(); // chama o método da classe Pai
    console.log("Sou o filho.");
  }
}

const filho = new Filho();
filho.falar();



// ⚠️ Observações importantes
// Você só pode usar super() dentro de uma classe filha (que usa extends).
// O super() deve ser chamado antes de usar this no construtor, senão dá erro:

//  ❌ Erro
// constructor() {
//   this.nome = 'Carlos'; // Erro: não pode usar this antes do super()
//   super();
// }
