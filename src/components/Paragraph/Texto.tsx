import styled from 'styled-components';

interface TextoProps {
  text: string;
  color: string;
}

const StyledTexto = styled.h3<TextoProps>`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.color || '#9c9c9c'};
`;

const Texto: React.FC<TextoProps> = ({ text, color }) => {
  return (
    <StyledTexto color={color}>
      {text}
    </StyledTexto>
  );
};

export default Texto;
