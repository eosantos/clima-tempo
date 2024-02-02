import styled from "styled-components";

interface AlertaProps {
  text: string;
  $textColorOption?: "color1" | "color2";
  $cardColorOption?: "color1" | "color2";
  $stripeColorOption?: "color1" | "color2";
}

const getColorByOption = (option: "color1" | "color2"): string => {
  switch (option) {
    case "color1":
      return "#f18d88";
    case "color2":
      return "#58aed5";
    default:
      return "#9c9c9c";
  }
};

const StyledAlerta = styled.p.attrs<{ $textColorOption: "color1" | "color2" }>(
  (props) => ({
    $textColorOption: props.$textColorOption,
  })
)`
  font-size: 10px;
  color: ${(props) => getColorByOption(props.$textColorOption)};
  padding: 0px 20px;
`;

const StyledCard = styled.div.attrs<{
  $cardColorOption: "color1" | "color2";
  $stripeColorOption: "color1" | "color2";
}>((props) => ({
  $cardColorOption: props.$cardColorOption,
  $stripeColorOption: props.$stripeColorOption,
}))`
  background: ${(props) =>
    props.$cardColorOption === "color1"
      ? "rgba(241,141,136,0.2)"
      : "rgba(88,174,213,0.2)"};
  border-radius: 8px;
  padding: 5px 5px;
  margin: 10px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    background-color: ${(props) => getColorByOption(props.$stripeColorOption)};
    border-radius: 6px 0 0 6px;
  }
`;

const Alerta: React.FC<AlertaProps> = ({
  text,
  $textColorOption = "color1",
  $cardColorOption,
  $stripeColorOption,
}) => {
  return (
    <StyledCard
      $cardColorOption={$cardColorOption || "color1"}
      $stripeColorOption={$stripeColorOption || "color1"}
    >
      <StyledAlerta $textColorOption={$textColorOption}>{text}</StyledAlerta>
    </StyledCard>
  );
};

export default Alerta;