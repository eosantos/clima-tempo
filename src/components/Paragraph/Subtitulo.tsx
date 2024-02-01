import styled from "styled-components";

interface SubTituloProps {
  text: string;
  color?: string;
}

const StyledSubTitulo = styled.h2`
  font-size: 18px;
  color: #9c9c9c;
`;

const SubTitulo: React.FC<SubTituloProps> = ({ text }) => {

  return (
    <StyledSubTitulo>
      {text}
    </StyledSubTitulo>
  );
};

export default SubTitulo;
