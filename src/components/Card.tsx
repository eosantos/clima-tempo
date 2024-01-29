'use client';
import styled from 'styled-components';
import Paragrafo from './Paragraph/Paragrafo';
import SubTitulo from './Paragraph/Subtitulo';



const CardContainer = styled.div`
  max-width: 290px;
  max-height: 215px;
  margin: 0px auto;
`;

const CardWrapper = styled.div`
  margin: 20px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
`;


const Card: React.FC = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <Paragrafo text={'Sol e aumento de nuvens. Pancadas de chuva à tarde. À noite, muitas nuvens, mas sem chuva.'}/>
        <SubTitulo bold={true} text={'25/07/2023'}/>
        <SubTitulo text={'Terça-Feira'}/>
        <SubTitulo text="Texto padrão" />
        <SubTitulo text="Texto em #9c9c9c" color="#9c9c9c" />
        <SubTitulo text="Texto em #439c99" color="#439c99" />
        <SubTitulo text="Texto em #5dc0cb" color="#5dc0cb" />
        <SubTitulo text="Texto em #d48c89" color="#d48c89" />
        <SubTitulo text="Texto em #f19631" color="#f19631" />
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
