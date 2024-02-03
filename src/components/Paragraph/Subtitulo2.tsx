import styled from "styled-components";

interface SubTituloProps {
  text: string;
  color: string;
}

const StyledSubTitulo = styled.h2`
  font-size: 18px;
  color: ${(props) => props.color || "#9c9c9c"};
  font-weight: normal;
`;

const Subtitulo2: React.FC<SubTituloProps> = ({
  text, color
}) => {
  return (
    <StyledSubTitulo color={color}>
      {text} 
    </StyledSubTitulo>
  );
};

export default Subtitulo2;
