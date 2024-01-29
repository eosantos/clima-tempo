'use client';
import styled from 'styled-components';

interface ParagrafoProps {
  text: string;
  color?: string;
}

const StyledParagrafo = styled.p`
  font-size: 10px;
  color: #9c9c9c;
  padding: 0px 20px 0px 20px;
`;

const SubTitulo: React.FC<ParagrafoProps> = ({ text }) => {
  return <StyledParagrafo>{text}</StyledParagrafo>;
};

export default SubTitulo;
