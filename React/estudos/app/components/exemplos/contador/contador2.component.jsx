"use client"

import { useState } from "react"

function Contador2(props) {

    const [valor, setValor] = useState(props.inicial)
    console.log('Renderizando o componente Contador2 com valor:', valor);

    function adicionar() {
        setValor(valor + 1)
    }

    function subtrair() {
        setValor(valor - 1)
    }

    return (
        <div className="flex flex-col gap-8  border-2 border-black p-4
        justify-center rounded-md bg-white text-center 
        
        ">
            <div className="flex items-center gap-4   p-4 justify-center rounded-md">
                <h1 className="text-5xl font-black text-black">{valor}</h1>
            </div>
            <div className="flex gap-8 justify-center ">
                <button onClick={adicionar} className="bg-blue-600 p-4  rounded-md hover:bg-blue-950">Adicionar</button>
                <button onClick={subtrair} className="bg-red-600 p-4 rounded-md hover:bg-red-950">Subtrair</button>
            </div>        
    </div>
    )
}

export default Contador2;