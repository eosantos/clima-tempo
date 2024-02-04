import styled from 'styled-components';
import Texto from './Paragraph/Texto';
import EstiloDados from './EstiloDados';

interface DadosMeteorologicosProps {
  data: {
    temperature: {
      min: number;
      max: number;
    };
    humidity: {
      min: number;
      max: number;
    };
    sun: {
      sunrise: string;
      sunset: string;
    };
    rain: {
      probability: number;
    };
  };
}

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

const DadosMeteorologicos: React.FC<DadosMeteorologicosProps> = ({ data }) => {
  return (
    <ContinerWrapper>
      {data && (
        <>
          <RowContainer>
            <TextContainer>
              <Texto text="Temperatura:" color="#9c9c9c" />
            </TextContainer>
            <DadosContainer>
              <EstiloDados
                text={`${data.temperature.min}%`}
                $textColorOption="color1"
                $cardColorOption="color1"
                $stripeColorOption="color1"
              />
              <EstiloDados
                text={`${data.temperature.max}%`}
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
                text={`${data.humidity.min}% - ${data.humidity.max}%`}
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
                text={`${data.sun.sunrise} - ${data.sun.sunset}`}
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
              <EstiloDados text={`${data.rain.probability} %`} />
            </DadosContainer>
          </RowContainer>
        </>
      )}
    </ContinerWrapper>
  );
};

export default DadosMeteorologicos;
