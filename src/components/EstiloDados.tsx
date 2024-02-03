import styled from "styled-components";

interface EstiloDadosProps {
  text: string;
  $textColorOption?: "color1" | "color2" | "color3" | "color4";
  $cardColorOption?: "color1" | "color2" | "color3" | "color4";
  $stripeColorOption?: "color1" | "color2" | "color3" | "color4";
}

const getColorByOption = (
  option: "color1" | "color2" | "color3" | "color4"
): string => {
  switch (option) {
    case "color1":
      return "#58aed5";
    case "color2":
      return "#f18d88";
    case "color3":
      return "#439c99";
    case "color4":
      return "#f19631";
    default:
      return "#9c9c9c";
  }
};

const applyOpacity = (color: string): string => {
  return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
    color.slice(3, 5),
    16
  )}, ${parseInt(color.slice(5, 7), 16)}, 0.2)`;
};

const StyledDadosMeteorologicos = styled.p.attrs<{
  $textColorOption: "color1" | "color2" | "color3" | "color4";
}>((props) => ({
  $textColorOption: props.$textColorOption,
}))`
  font-size: 8px;
  color: ${(props) => getColorByOption(props.$textColorOption)};
  padding: 0px 20px;
`;

const StyledCard = styled.div.attrs<{
  $cardColorOption: "color1" | "color2" | "color3" | "color4";
  $stripeColorOption: "color1" | "color2" | "color3" | "color4";
}>((props) => ({
  $cardColorOption: props.$cardColorOption,
  $stripeColorOption: props.$stripeColorOption,
}))`
  background: ${(props) =>
    applyOpacity(getColorByOption(props.$cardColorOption))};
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
    background-color: ${(props) => getColorByOption(props.$stripeColorOption)};
    border-radius: 3px 0 0 3px;
  }
`;

type ColorOption = "color1" | "color2" | "color3" | "color4";

interface EstiloDadosProps {
  text: string;
  $textColorOption?: ColorOption;
  $cardColorOption?: ColorOption;
  $stripeColorOption?: ColorOption;
}

const EstiloDados: React.FC<EstiloDadosProps> = ({
  text,
  $textColorOption = "color1",
  $cardColorOption = "color1",
  $stripeColorOption = "color1",
}) => {
  return (
    <StyledCard
      $cardColorOption={$cardColorOption}
      $stripeColorOption={$stripeColorOption}
    >
      <StyledDadosMeteorologicos $textColorOption={$textColorOption}>
        {text}
      </StyledDadosMeteorologicos>
    </StyledCard>
  );
};

export default EstiloDados;