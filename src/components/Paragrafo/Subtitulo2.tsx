import styled from 'styled-components';

interface PropsSubTitulo {
  text: string;
  color?: string;
}

const EstilizadoSubTitulo = styled.h2`
  font-size: 18px;
  font-weight: normal;
  color: ${(props) => props.color || '#9c9c9c'};
`;

const Subtitulo2: React.FC<PropsSubTitulo> = ({ text, color }) => {
  return <EstilizadoSubTitulo color={color}>{text}</EstilizadoSubTitulo>;
};

export default Subtitulo2;
