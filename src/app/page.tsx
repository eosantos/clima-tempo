import Titulo from '@/components/Paragraph/Titulo';
import SubTitulo from '@/components/Paragraph/Subtitulo';

export default function Home() {
  return (
    <main>
      <div>
        <Titulo
          text="Temperatura para São Paulo para os próximos 7 dias"
          boldWords={['São', 'Paulo', '7', 'dias']}
        />
        <SubTitulo bold text="26/07/2023" />
        <SubTitulo text="Quarta-Feira" />
      </div>
    </main>
  );
}
