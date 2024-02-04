import styled from 'styled-components';
import Texto from './Paragrafo/Texto';
import EstiloDados from './EstiloDados';
import { format } from 'date-fns';

interface PropsDadosMeteorologicos {
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

const TextoContainer = styled.div`
  width: 100px;
  text-align: left;
  padding-left: 8px;
`;

const DadosContainer = styled.div`
  width: 30;
  display: flex;
`;

const getHourAndMinute = (timeString: string) => {
  const date = new Date(`2000-01-01T${timeString}`);
  return format(date, 'HH:mm');
};

const DadosMeteorologicos: React.FC<PropsDadosMeteorologicos> = ({ data }) => {
  return (
    <ContinerWrapper>
      {data && (
        <>
          <RowContainer>
            <TextoContainer>
              <Texto text="Temperatura:" color="#9c9c9c" />
            </TextoContainer>
            <DadosContainer>
              <EstiloDados
                text={`${data.temperature.min}%`}
                $opcaoCorTexto="color1"
                $opcaoCorCard="color1"
                $opcaoCorFaixa="color1"
              />
              <EstiloDados
                text={`${data.temperature.max}%`}
                $opcaoCorTexto="color2"
                $opcaoCorCard="color2"
                $opcaoCorFaixa="color2"
              />
            </DadosContainer>
          </RowContainer>

          <RowContainer>
            <TextoContainer>
              <Texto text="Umidade:" color="#9c9c9c" />
            </TextoContainer>
            <DadosContainer>
              <EstiloDados
                text={`${data.humidity.min}% - ${data.humidity.max}%`}
                $opcaoCorTexto="color3"
                $opcaoCorCard="color3"
                $opcaoCorFaixa="color3"
              />
            </DadosContainer>
          </RowContainer>

          <RowContainer>
            <TextoContainer>
              <Texto text="Sol:" color="#9c9c9c" />
            </TextoContainer>
            <DadosContainer>
              <EstiloDados
                text={`${getHourAndMinute(data.sun.sunrise)} - ${getHourAndMinute(data.sun.sunset)}`}
                $opcaoCorTexto="color4"
                $opcaoCorCard="color4"
                $opcaoCorFaixa="color4"
              />
            </DadosContainer>
          </RowContainer>

          <RowContainer>
            <TextoContainer>
              <Texto text="Chuva:" color="#9c9c9c" />
            </TextoContainer>
            <DadosContainer>
              <EstiloDados
                text={`${data.rain.probability} %`}
                $opcaoCorTexto="color5"
                $opcaoCorCard="color5"
                $opcaoCorFaixa="color5"
              />
            </DadosContainer>
          </RowContainer>
        </>
      )}
    </ContinerWrapper>
  );
};

export default DadosMeteorologicos;
