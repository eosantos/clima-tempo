'use client';
import styled from 'styled-components';
import Paragrafo from './Paragraph/Paragrafo';
import SubTitulo from './Paragraph/Subtitulo';
import Texto from './Paragraph/Texto';
import DadosMeteorologicos from './DadosMeteorologicos'
import Alerta from './Alerta';



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
        <SubTitulo boldWords={['25/07/2023']}text={'25/07/2023'} /> 
        <SubTitulo text={'Terça-Feira'}/>
        <Paragrafo text={'Sol e aumento de nuvens. Pancadas de chuva à tarde. À noite, muitas nuvens, mas sem chuva.'}/>
        <div>
        <Texto text="Temperatura:" color="#9c9c9c" />
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
        </div>
  
        <div>
          <DadosMeteorologicos
            text="30º"
            $textColorOption="color3"
            $cardColorOption="color3"
            $stripeColorOption="color3"
          />
        </div>
        <div>
          <DadosMeteorologicos
            text="30º"
            $textColorOption="color4"
            $cardColorOption="color4"
            $stripeColorOption="color4"
          />
        </div>
        <div>
          <DadosMeteorologicos
            text="30º"
          />
        </div>

        <div>
          <Alerta
            text="Temperatura deste dia será maior do que a média do período"
            $textColorOption="color1"
            $cardColorOption="color1"
            //$stripeColorOption="color1"
          />
        </div>

      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
