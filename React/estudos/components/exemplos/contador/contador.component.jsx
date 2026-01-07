"use client"

import { useState } from "react"

export default function Contador() {

    const [valor, setValor] = useState(100)
    
    function adicionar() {
        setValor(valor + 1)
        console.log('Valor atualizado:', valor + 1)
    }

    function subtrair() {
        setValor(valor - 1)
        console.log('Valor atualizado:', valor - 1)
    }

    return (
        <div className="flex flex-col gap-4 items-start">
            <h1 className="text-3xl font-black">{valor}</h1>
            <button className="btn btn-primary" onClick={adicionar}>
                Adicionar 
            </button>
            <button className="btn btn-primary" onClick={subtrair}>
                Subtrair
            </button>
        </div>
    )
}