import Titulo from '@/components/Paragraph/Titulo';
//import SubTitulo from '@/components/Paragraph/Subtitulo';
//import Texto from '@/components/Paragraph/Texto';

export default function Home() {
  return (
    <>
      <Titulo 
        text="Temperatura para São Paulo para os próximos 7 dias"
        boldWords={['São', 'Paulo', '7', 'dias']}
      />
      {/* <SubTitulo bold text="26/07/2023" />
        <SubTitulo text="Quarta-Feira" />
        <Texto bold text="Temperatura" />
        <Texto text="Texto em #9c9c9c" color="#9c9c9c" />
        <Texto text="Texto em #439c99" color="#439c99" />
        <Texto text="Texto em #5dc0cb" color="#5dc0cb" />
        <Texto text="Texto em #d48c89" color="#d48c89" />
        <Texto text="Texto em #f19631" color="#f19631" /> */}
    </>
  );
}
