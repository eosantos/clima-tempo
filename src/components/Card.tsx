// Card.tsx
import React from "react";
import styled from "styled-components";
import Paragrafo from "./Paragraph/Paragrafo";
import Texto from "./Paragraph/Texto";
import DadosMeteorologicos from "./DadosMeteorologicos";
import Alerta from "./Alerta";
import useClima from "@/hooks/useClima";
import HeaderCard from "./HeaderCard";

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

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 5px 0;
  border-bottom: 1px solid rgba(156, 156, 156, 0.2);
`;

const TextContainer = styled.div`
  width: 100px;
  text-align: left;
  padding-left: 8px;
`;

const DadosContainer = styled.div`
  width: 30;
  display: flex;  
`;

const Card: React.FC = () => {
  const { climaData } = useClima();

  return (
    <CardContainer>
      <CardWrapper>
        {climaData && (
          <>           
            <HeaderCard />            

            <Paragrafo text={climaData.data[0].text_icon.text.pt} />

            <RowContainer>
              <TextContainer>
                <Texto text="Temperatura:" color="#9c9c9c" />
              </TextContainer>
              <DadosContainer>
                <DadosMeteorologicos
                  text={`${climaData.data[0].temperature.min}%`}
                  $textColorOption="color1"
                  $cardColorOption="color1"
                  $stripeColorOption="color1"
                />
                <DadosMeteorologicos
                  text={`${climaData.data[0].temperature.max}%`}
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
                  text={`${climaData.data[0].humidity.min}% - ${climaData.data[0].humidity.max}%`}
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
                  text={`${climaData.data[0].sun.sunrise} - ${climaData.data[0].sun.sunset}`}
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
                  text={`${climaData.data[0].rain.probability} %`}
                />
              </DadosContainer>
            </RowContainer>

            <Alerta
              text="Temperatura deste dia será maior do que a média do período"
              $textColorOption="color1"
              $cardColorOption="color1"
              $stripeColorOption="color1"
            />
          </>
        )}
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;