// uma função callback é uma função passada para ser executada em algum momento mais tarde
// um dos problemas da callback é que você coloca uma função dentro da outra e isso fca muito confuso


const login = (email, password, onSucess) => {
    setTimeout(() => {
        console.log("usuario logado!")
        onSucess({email, password})
    }, 1000)
}

const getDetails = (email, onSuccess) => {
    setTimeout(() => {
        //console.log({nome: nome, idade: idade, tell: tell})
        onSuccess({nome: 'carlos', idade: 27, tell: 123123123, email}) // callback
    }, 2000)
}

const user = login("carlos@kakka", 123123, (user) => {
    getDetails(user.email, (details) => {
        console.log({details})
    })
})



// Posição	Parâmetro	O que ele deve ser
// 1º	email	o dado (ex: string do email)
// 2º	onSuccess	a função callback