

const login = (email, password, onSuces,setError) => {
    setTimeout(() => {
        const error = false

        if (error) {
            return setError(new Error('Senha errada/invalida '))
        }


        console.log('Usuario logado')
        onSuces({ email, password })
    }, 1000)
}

const user = login('carlos@legal', 123123, (user) => {
    console.log({user})
})