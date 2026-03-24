// Guarda os dados simples da sua conta
class Conta {
    constructor(nome, sexo, idade) {
        this.Nome = nome;
        this.Sexo = sexo
        this.Idade = idade;
    }


    Mostrar_dados() {
        console.log(`Nome: ${this.Nome} Sexo: ${this.Sexo} Idade: ${this.Idade}`)
    }
}

// aqui vai guarda valores de transações 
class Transacoes extends Conta {



    constructor(nome, sexo, idade, saldo) {
        super(nome, sexo, idade)
        this._Saldo = saldo
    }



    Mostrar_saldo() {
        console.log(`Você tem R$: ${this._Saldo}`)
    }

    Sacar(valor) {
        if (valor <= this._Saldo) {
            this._Saldo -= valor
            console.log(`Você fez um saque no valor: R$${valor} Novo Saldo R$${this._Saldo}`)
        } else {
            console.log("Saldo insuficiente.!")
        }
    }

    Depositar(valor) {
        this._Saldo += valor
        console.log(`Você depositou R$${valor}. Novo Saldo R$${this._Saldo}`)
    }

}


conta1 = new Transacoes("Carlos", "Masculino", 27, 2000)
conta1.Mostrar_dados()
conta1.Mostrar_saldo()
conta1.Sacar(1000)
conta1.Depositar(3000)



// 🧠 Explicação simples
// 🔹 extends

// 👉 Uma classe herda outra

// 🔹 super()

// 👉 Chama o constructor da classe pai

// 🔹 Instância correta
// Classe	Métodos disponíveis
// Conta	Mostrar_dados
// Transacoes	Mostrar_dados + Mostrar_saldo



// 💡 Quando usar cada um

// | Tipo          | Quando usar                    |
// | ------------- | ------------------------------ |
// | public        | dados simples                  |
// | #private      | dados sensíveis (saldo, senha) |
// | _protected    | convenção                      |
// | getter/setter | validação                      |
