'use client';
import styled from 'styled-components';

interface SubTituloProps {
  //boldWords?: string[];
  text: string;
  color?: string;
}

const StyledSubTitulo = styled.h2`
  font-size: 18px;
  color: #9c9c9c;
`;

const SubTitulo: React.FC<SubTituloProps> = ({ text }) => {
  //const words = text.match(/\S+/g) || [];

return (
    <StyledSubTitulo>
      {text}
      {/* {words.map((word, index) => (
        <span
          key={index}
          style={{ fontWeight: boldWords.includes(word) ? 'bold' : 'normal' }}
        >
          {word}
          {index < words.length - 1 && ' '}
        </span>
      ))}*/}
    </StyledSubTitulo> 
  );
};

export default SubTitulo;
