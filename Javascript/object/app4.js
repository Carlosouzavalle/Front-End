let cliente = {
    nome: 'carlos',
    apelido: 'eduardo',
    telefone: 55845555
}


for(chave in cliente) {
    console.log(chave + " = " + cliente[chave])
}
 
//=====================================================================================
// acesando todos os valores dentro do nosso objeto