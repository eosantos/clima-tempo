import styled from "styled-components";
import Texto from "./Paragraph/Texto";
import EstiloDados from "./EstiloDados";
import useClima from "@/hooks/useClima";

const ContinerWrapper = styled.div`
  margin: 0;
  padding: 0;
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

const DadosMeteorologicos: React.FC = () => {
  const { climaData } = useClima();

  return (
    <ContinerWrapper>
      {climaData && (
        <>
          <RowContainer>
            <TextContainer>
              <Texto text="Temperatura:" color="#9c9c9c" />
            </TextContainer>
            <DadosContainer>
              <EstiloDados
                text={`${climaData.data[0].temperature.min}%`}
                $textColorOption="color1"
                $cardColorOption="color1"
                $stripeColorOption="color1"
              />
              <EstiloDados
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
              <EstiloDados
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
              <EstiloDados
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
              <EstiloDados text={`${climaData.data[0].rain.probability} %`} />
            </DadosContainer>
          </RowContainer>
        </>
      )}
    </ContinerWrapper>
  );
};

export default DadosMeteorologicos;
