import styled from 'styled-components';

interface EstiloDadosProps {
  text: string;
  $opcaoCorTexto?: 'color1' | 'color2' | 'color3' | 'color4' | 'color5'; // Adicione a 5ª opção de cor
  $opcaoCorCard?: 'color1' | 'color2' | 'color3' | 'color4' | 'color5'; // Adicione a 5ª opção de cor
  $opcaoCorFaixa?: 'color1' | 'color2' | 'color3' | 'color4' | 'color5'; // Adicione a 5ª opção de cor
}

const getColorByOption = (
  option: 'color1' | 'color2' | 'color3' | 'color4' | 'color5'
): string => {
  switch (option) {
    case 'color1':
      return '#58aed5';
    case 'color2':
      return '#f18d88';
    case 'color3':
      return '#439c99';
    case 'color4':
      return '#f19631';
    case 'color5': // Nova opção de cor
      return '#9c9c9c'; // Substitua 'YourNewColorCode' pelo código de cor desejado
    default:
      return '#9c9c9c';
  }
};

const applyOpacity = (color: string): string => {
  return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
    color.slice(3, 5),
    16
  )}, ${parseInt(color.slice(5, 7), 16)}, 0.2)`;
};

const StyledDadosMeteorologicos = styled.p.attrs<{
  $opcaoCorTexto: 'color1' | 'color2' | 'color3' | 'color4' | 'color5';
}>((props) => ({
  $opcaoCorTexto: props.$opcaoCorTexto
}))`
  font-size: 8px;
  color: ${(props) => getColorByOption(props.$opcaoCorTexto)};
  padding: 0px 20px;
`;

const StyledCard = styled.div.attrs<{
  $opcaoCorCard: 'color1' | 'color2' | 'color3' | 'color4' | 'color5';
  $opcaoCorFaixa: 'color1' | 'color2' | 'color3' | 'color4' | 'color5';
}>((props) => ({
  $opcaoCorCard: props.$opcaoCorCard,
  $opcaoCorFaixa: props.$opcaoCorFaixa
}))`
  background: ${(props) => applyOpacity(getColorByOption(props.$opcaoCorCard))};
  border-radius: 3px;
  padding: 5px 5px;
  margin: 5px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: ${(props) => getColorByOption(props.$opcaoCorFaixa)};
    border-radius: 3px 0 0 3px;
  }
}
`;

type ColorOption = 'color1' | 'color2' | 'color3' | 'color4' | 'color5'; // Adicione a 5ª opção de cor

interface EstiloDadosProps {
  text: string;
  $opcaoCorTexto?: ColorOption;
  $opcaoCorCard?: ColorOption;
  $opcaoCorFaixa?: ColorOption;
}

const EstiloDados: React.FC<EstiloDadosProps> = ({
  text,
  $opcaoCorTexto = 'color1',
  $opcaoCorCard = 'color1',
  $opcaoCorFaixa = 'color1'
}) => {
  return (
    <StyledCard $opcaoCorCard={$opcaoCorCard} $opcaoCorFaixa={$opcaoCorFaixa}>
      <StyledDadosMeteorologicos $opcaoCorTexto={$opcaoCorTexto}>
        {text}
      </StyledDadosMeteorologicos>
    </StyledCard>
  );
};

export default EstiloDados;
