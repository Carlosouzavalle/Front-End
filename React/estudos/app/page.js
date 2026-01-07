import Titulo from '@/components/shared/titulo.component';
// import Contador from '@/components/exemplos/contador/contador.component';
import Teste from '@/components/teste/teste.jsx';
import Contador2 from '@/components/exemplos/contador/contador2.component';

export default function Home() {
  return (
    <div className="flex flex-col p-8 gap-8">
        <Teste titulo="Home Page" titulo2="Subtítulo da Home Page"/>
        <Contador2 />
    </div>
  );
}


// props = propriedades que são passadas para o componente pai para o componente filho
// children = conteúdo que é passado de um componente pai para o componente filho
// jsx = sintaxe que permite escrever HTML dentro do JavaScript
// component = função que retorna um pedaço de interface reutilizável