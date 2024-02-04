import styled from 'styled-components';

interface ParagrafoProps {
  text: string;
  color?: string;
}

const StyledParagrafo = styled.p`
  font-size: 10px;
  color: ${(props) => props.color || '#9c9c9c'};
  padding: 0px 20px;
`;

const Paragrafo: React.FC<ParagrafoProps> = ({ text, color }) => {
  return <StyledParagrafo color={color}>{text}</StyledParagrafo>;
};

export default Paragrafo;
