import styled from 'styled-components';

interface PropsParagrafo {
  text: string;
  color?: string;
}

const EstilizadoParagrafo = styled.p`
  font-size: 10px;
  padding: 0px 20px;
  color: ${(props) => props.color || '#9c9c9c'};
`;

const Paragrafo: React.FC<PropsParagrafo> = ({ text, color }) => {
  return <EstilizadoParagrafo color={color}>{text}</EstilizadoParagrafo>;
};

export default Paragrafo;
