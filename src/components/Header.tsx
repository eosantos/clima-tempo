import React from "react";
import styled from "styled-components";
import Titulo from "./Paragraph/Titulo";
import useCidade from "../hooks/useCidade";

const HeaderContainer = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

const HeaderCard = styled.div`
  margin: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const TopStripe = styled.div`
  border-radius: 15px 15px 0 0;
  margin-bottom: 20px;
  background-color: #439c99;
  height: 15px;
`;

const Header: React.FC = () => {
  const { nomeCidade, loading, error } = useCidade();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error}</p>;
  }

  return (
    <HeaderContainer>
      <HeaderCard>
        <TopStripe />
        <Titulo
          text={`Temperatura para ${nomeCidade} para os próximos 7 dias`}
          boldWords={["Varginha", "7", "dias"]}
        />
      </HeaderCard>
    </HeaderContainer>
  );
};

export default Header;