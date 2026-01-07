import Teste from '@/components/teste/teste';
import Titulo from '@/components/shared/titulo.component';
import Contador from '@/components/exemplos/contador/contador.component';

export default function Home() {
  return (
    <div className='flex flex-col gap-10 p-10'>
      <Titulo principal="Home Page"
        secundario="Bem vindo ao app"
      />
      <Contador />
    </div>
  );
}


// props = propriedades que são passadas para o componente pai para o componente filho