// Um pouco mais sobre objeto
let nacionalidade = 'brasil'

const cliente = {
    nome: 'Carlos',
    apelido: 'Eduardo',
    telefone: 656266526,
    "tipo cliente": "VIP",
    [nacionalidade]: "pt"
};

console.log(cliente.nome)

//===========================================================================
//assim também funciona
console.log(cliente['nome'])

//===========================================================================
// também podemos add propriedades
// cliente.telefone = 548416461
// console.log(cliente.telefone)


//===========================================================================
console.log(cliente.telefone)
// dessa forma deletamos uma propriedades do nosso objeto
delete cliente.telefone
console.log(cliente.telefone)

//===========================================================================
// isso aqui também funciona
console.log(cliente["tipo cliente"])

//===========================================================================

console.log(cliente.brasil)