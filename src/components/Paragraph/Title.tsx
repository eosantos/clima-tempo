'use client';
import styled from 'styled-components';

interface TitleProps {
  boldWords?: string[];
  text: string;
}

const StyledTitle = styled.h1`
  font-size: 24px;
  color: #439c99;
`;

const Title: React.FC<TitleProps> = ({ boldWords = [], text }) => {
  const words = text.split(' ');

  return (
    <StyledTitle>
      {words.map((word, index) => (
        <span
          key={index}
          style={{ fontWeight: boldWords.includes(word) ? 'bold' : 'normal' }}
        >
          {word}
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </StyledTitle>
  );
};

export default Title;
