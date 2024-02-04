import styled from 'styled-components';

interface PropsSubTitulo {
  text: string;
  color?: string;
}

const EstilizadoSubTitulo = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.color || '#9c9c9c'};
`;

const SubTitulo: React.FC<PropsSubTitulo> = ({ text, color }) => {
  return <EstilizadoSubTitulo color={color}>{text}</EstilizadoSubTitulo>;
};

export default SubTitulo;
