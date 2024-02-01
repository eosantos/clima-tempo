// Card.tsx
import React from "react";
import styled from "styled-components";
import HeaderCard from "./HeaderCard";
import Informativo from "./Informativo";
import DadosMeteorologicos from "./DadosMeteorologicos";
import Alerta from "./Alerta";

const CardContainer = styled.div`
  max-width: 290px;
  margin: 0 auto;
  display: flex;
`;

const CardWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Card: React.FC = () => {

  return (
    <CardContainer>
      <CardWrapper>
        <HeaderCard />
        <Informativo />
        <DadosMeteorologicos />

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
