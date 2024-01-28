import Titulo from '@/components/Paragraph/Titulo';

export default function Home() {
  return (
    <main>
      <div>
        <Titulo
          text="Temperatura para São Paulo para os próximos 7 dias"
          boldWords={['São', 'Paulo', '7', 'dias']}
        />
      </div>
    </main>
  );
}
