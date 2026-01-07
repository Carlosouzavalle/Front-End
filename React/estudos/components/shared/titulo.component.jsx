function Titulo(props) {
    return (
        <div className="flex flex-col">
            {/* <h1>{props.titulo ?? "Título Padrão"}</h1> */}
            <h1 className="text-lg font-black">{props.principal}</h1>
            <h1 className="text-sm text-zinc-400">{props.secundario}</h1>
        </div>
    )
}

export default Titulo;