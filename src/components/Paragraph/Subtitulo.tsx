'use client';
import styled from 'styled-components';

interface SubTituloProps {
  bold?: boolean;
  text: string;
  color?: string;
}

const StyledSubTitulo = styled.h1<{ bold?: boolean }>`
  font-size: 18px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: #9c9c9c;
`;

const SubTitulo: React.FC<SubTituloProps> = ({ bold = false, text }) => {
  return <StyledSubTitulo bold={bold}>{text}</StyledSubTitulo>;
};

export default SubTitulo;
