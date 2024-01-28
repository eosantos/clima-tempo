import Title from '@/components/Paragraph/Title';

export default function Home() {
  return (
    <main>
      <div>
        <Title
          text="Temperatura para São Paulo para os próximos 7 dias"
          boldWords={['São', 'Paulo', '7', 'dias']}
        />
      </div>
    </main>
  );
}
