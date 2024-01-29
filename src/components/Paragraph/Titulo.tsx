'use client';
import styled from 'styled-components';

interface TituloProps {
  boldWords?: string[];
  text: string;
  color?: string;
}

const StyledTitulo = styled.h1`
  font-size: 24px;
  color: #439c99;
  padding: 0px 20px 0px 20px;
`;

const Titulo: React.FC<TituloProps> = ({ boldWords = [], text }) => {
  const words = text.split(' ');

  return (
    <>
      <StyledTitulo>
        {words.map((word, index) => (
          <span
            key={index}
            style={{ fontWeight: boldWords.includes(word) ? 'bold' : 'normal' }}
          >
            {word}
            {index < words.length - 1 && ' '}
          </span>
        ))}
      </StyledTitulo>
    </>
  );
};

export default Titulo;
