'use client';
import styled from 'styled-components';

interface TextoProps {
  bold?: boolean;
  text: string;
  color?: 'default' | '#9c9c9c' | '#439c99' | '#5dc0cb' | '#d48c89' | '#f19631';
}

const getColor = (color?: TextoProps['color']): string => {
  switch (color) {
    case '#9c9c9c':
      return '#9c9c9c';
    case '#439c99':
      return '#439c99';
    case '#5dc0cb':
      return '#5dc0cb';
    case '#d48c89':
      return '#d48c89';
    case '#f19631':
      return '#f19631';
    default:
      return 'inherit';
  }
};

const StyledTexto = styled.h3<TextoProps>`
  font-size: 18px;  
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => getColor(props.color)};
`;

const Texto: React.FC<TextoProps> = ({ text, color = 'default', ...rest }) => {
  return (
    <StyledTexto color={color} {...rest}>
      {text}
    </StyledTexto>
  );
};

export default Texto;
