// Paragrafo.tsx
import styled from 'styled-components';

interface ParagrafoProps {
  text: string;
  color?: string;
}

const StyledParagrafo = styled.p`
  font-size: 8px;
  color: ${(props) => props.color || '#9c9c9c'};
  padding: 0px 20px;
`;

const StyledCard = styled.div`
  background: rgba(156, 156, 156, 0.2);
  border-radius: 8px;
  padding: 10px 5px 10px 5px;
  margin: 5px;
`;

const Paragrafo: React.FC<ParagrafoProps> = ({ text, color }) => {
  return (
    <StyledCard>
      <StyledParagrafo color={color}>{text}</StyledParagrafo>
    </StyledCard>
  );
};

export default Paragrafo;
