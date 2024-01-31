import React from 'react';
import styled from 'styled-components';
import Paragrafo from './Paragraph/Paragrafo';
import SubTitulo from './Paragraph/Subtitulo';
import Texto from './Paragraph/Texto';
import DadosMeteorologicos from './DadosMeteorologicos';
import Alerta from './Alerta';

const CardContainer = styled.div`
  max-width: 290px;
  max-height: 215px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  margin: 20px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 5px 0;

  border-bottom: 1px solid rgba(156,156,156, 0.2);
`;

const TextContainer = styled.div`
  width: 100px;
  text-align: left;
  padding-left: 8px;
`;

const DadosContainer = styled.div`
  width: 30;
  display: flex;
  justify-content: space-between;
`;

const Card: React.FC = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <SubTitulo boldWords={['25/07/2023']} text={'25/07/2023'} />
        <SubTitulo text={'Terça-Feira'} />
        <Paragrafo text={'Sol e aumento de nuvens. Pancadas de chuva à tarde. À noite, muitas nuvens, mas sem chuva.'} />

        <RowContainer>
          <TextContainer>
            <Texto text="Temperatura:" color="#9c9c9c" />
          </TextContainer>
          <DadosContainer>
            <DadosMeteorologicos
              text="14º"
              $textColorOption="color1"
              $cardColorOption="color1"
              $stripeColorOption="color1"
            />
            <DadosMeteorologicos
              text="30º"
              $textColorOption="color2"
              $cardColorOption="color2"
              $stripeColorOption="color2"
            />
          </DadosContainer>
        </RowContainer>

        <RowContainer>
          <TextContainer>
            <Texto text="Umidade:" color="#9c9c9c" />
          </TextContainer>
          <DadosContainer>
            <DadosMeteorologicos
              text="28% - 31%"
              $textColorOption="color3"
              $cardColorOption="color3"
              $stripeColorOption="color3"
            />
          </DadosContainer>
        </RowContainer>

        <RowContainer>
          <TextContainer>
            <Texto text="Sol:" color="#9c9c9c" />
          </TextContainer>
          <DadosContainer>
            <DadosMeteorologicos
              text="06:30 - 18:30"
              $textColorOption="color4"
              $cardColorOption="color4"
              $stripeColorOption="color4"
            />
          </DadosContainer>
        </RowContainer>

        <RowContainer>
          <TextContainer>
            <Texto text="Chuva:" color="#9c9c9c" />
          </TextContainer>
          <DadosContainer>
            <DadosMeteorologicos
              text="28%"
            />
          </DadosContainer>
        </RowContainer>
        
        <Alerta
          text="Temperatura deste dia será maior do que a média do período"
          $textColorOption="color1"
          $cardColorOption="color1"
          $stripeColorOption="color1"
        />        
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
