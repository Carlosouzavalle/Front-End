

import Contador2 from "../components/exemplos/contador/contador2.component"
import Pagina from "../components/shared/pagina.component"

export default function ContadorPage() {
    return (
        <Pagina titulo="Página do Contador" subtitulo="Aqui está o nosso contador">
            <Contador2 inicial={10} />
            <Contador2 inicial={100} />
            <Contador2 inicial={1000} />
            
        </Pagina>
    )
}