import Titulo from "@/app/components/shared/titulo.component";


import Link from "next/link";


function Pagina(props) {
    return (
        console.log(props),
        <div className="flex min-h-screen">
            
            <aside className="bg-zinc-800 w-72 p-6">
                <h1 className="text-xl font-black">Logo</h1>
                <ol>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="../rotas">Contador</Link>
                    </li>
                </ol>
            </aside>
            <main className="bg-yellow-600 flex-1 p-6 flex flex-col gap-6">
                <Titulo 
                principal={props.titulo ?? "Título Padrão da Página"}
                secundario={props.subtitulo ?? "Subtítulo Padrão da Página"}
                />
                <div>
                    {props.children}
                </div>
            </main>
        </div>
    );
}

export default Pagina;

// children = conteúdo que é passado de um componente pai para o componente filho