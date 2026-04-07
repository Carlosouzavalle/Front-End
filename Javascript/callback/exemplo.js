const Conta = (email, password, onSucess) => {
    setTimeout(() => {

        onSucess({ email, password })
    }, 1000)
}

const Dados = (nome, idade, sexo, showdados) => {
    setTimeout(() => {
        showdados({ nome, idade, sexo })
    }, 1000)
}

const user = Conta('legal@gmai.com', 123123,
    (user) => {
        console.log({ user })
        const user_dados = Dados('Carlos', 27, 'Masculino',
            (user_dados) => {
                console.log({ user_dados })
            })
    })