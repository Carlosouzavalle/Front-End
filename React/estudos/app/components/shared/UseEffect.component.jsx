"use client";

import { useEffect, useState } from "react";

function useCustomEffect() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("count mudou:", count);
  }, [count]);

  function incrementar() {
    setCount(count + 1);
  }

  return (

    <div>
      <button className="btn btn-primary" onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default useCustomEffect;



// 🧠 O que é o useEffect

// O useEffect serve para executar efeitos colaterais em componentes React.
// 👉 Efeito colateral = algo que não é só renderizar tela, por exemplo:
// buscar dados na API
// mexer no DOM
// usar setInterval / setTimeout
// ouvir eventos
// salvar dados
// sincronizar estado com algo externo

// useState guarda dados.
// useEffect reage a mudanças desses dados.

// useState
// 👉 Serve para armazenar estado
// Estado = dados que:
// mudam com o tempo
// quando mudam, re-renderizam o componente

// useEffect
// 👉 Serve para executar efeitos colaterais
// Ou seja: código que não é renderização.
// useEffect serve para coisas que acontecem “por baixo dos panos”, fora do render.

// Exemplos clássicos:
// console.log
// fetch de API
// salvar no localStorage
// setInterval
// addEventListener
// integração com libs externas
// analytics
// subscriptions