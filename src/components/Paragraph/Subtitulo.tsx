import styled from "styled-components";

interface SubTituloProps {
  bold?: boolean;
  fontSize?: "normal" | "large";
  color?: string;
}

const StyledSubTitulo = styled.h2<SubTituloProps>`
  font-size: ${(props) => (props.fontSize === "large" ? "22px" : "18px")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => (props.color ? props.color : "#9c9c9c")};
`;

const SubTitulo: React.FC<SubTituloProps & { text: string }> = ({
  text,
  bold = false,
  fontSize = "normal",
  color,
}) => {
  return (
    <StyledSubTitulo bold={bold.toString()} fontSize={fontSize} color={color}>
      {text}
    </StyledSubTitulo>
  );
};

export default SubTitulo;
