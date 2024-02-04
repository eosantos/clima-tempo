'use cltextient';
import styled from 'styled-components';

interface PropsTitulo {
  Negrito?: string[];
  texto: string;
  cor?: string;
}

const EstilizadoTitulo = styled.h1`
  font-size: 24px;
  color: #439c99;
  padding: 0px 20px 0px 20px;
`;

const Titulo: React.FC<PropsTitulo> = ({ Negrito = [], texto }) => {
  const palavras = texto.split(' ');

  return (
    <>
      <EstilizadoTitulo>
        {palavras.map((palavra, index) => (
          <span
            key={index}
            style={{
              fontWeight: Negrito.includes(palavra) ? 'bold' : 'normal'
            }}
          >
            {palavra}
            {index < palavras.length - 1 && ' '}
          </span>
        ))}
      </EstilizadoTitulo>
    </>
  );
};

export default Titulo;
