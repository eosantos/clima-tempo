import styled from 'styled-components';

interface Propstext {
  text: string;
  color: string;
}

const EstilizadoTexto = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.color || '#9c9c9c'};
`;

const text: React.FC<Propstext> = ({ text, color }) => {
  return <EstilizadoTexto color={color}>{text}</EstilizadoTexto>;
};

export default text;
