"use client"

import { useState } from "react"

function Contador2() {

    const [valor, setValor] = useState(0)
    console.log('Renderizando o componente Contador2 com valor:', valor);

    function adicionar() {
        setValor(valor + 1)
    }

    function subtrair() {
        setValor(valor - 1)
    }

    return (
        <div className="flex gap-8 items-start">
            <h1>{valor}</h1>
            <button onClick={adicionar} className="bg-blue-600 p-4 rounded-md hover:bg-blue-950">Adicionar</button>
            <button onClick={subtrair} className="bg-red-600 p-4 rounded-md hover:bg-red-950">Subtrair</button>
        </div>
    )
}

export default Contador2;