import styled from 'styled-components';

interface PropsAlerta {
  text: string;
  $opcaoCorTexto?: 'cor1' | 'cor2';
  $opcaoCorCard?: 'cor1' | 'cor2';
  $opcaoCorFaixa?: 'cor1' | 'cor2';
}

const obterCorPorOpcao = (opcao: 'cor1' | 'cor2'): string => {
  switch (opcao) {
    case 'cor1':
      return '#f18d88';
    case 'cor2':
      return '#58aed5';
    default:
      return '#9c9c9c';
  }
};

const EstilizadoAlerta = styled.p.attrs<{ $opcaoCorTexto: 'cor1' | 'cor2' }>(
  (props) => ({
    $opcaoCorTexto: props.$opcaoCorTexto
  })
)`
  font-size: 10px;
  color: ${(props) => obterCorPorOpcao(props.$opcaoCorTexto)};
  padding: 0px 20px;
`;

const EstilizadoCard = styled.div.attrs<{
  $opcaoCorCard: 'cor1' | 'cor2';
  $opcaoCorFaixa: 'cor1' | 'cor2';
}>((props) => ({
  $opcaoCorCard: props.$opcaoCorCard,
  $opcaoCorFaixa: props.$opcaoCorFaixa
}))`
  background: ${(props) =>
    props.$opcaoCorCard === 'cor1'
      ? 'rgba(241,141,136,0.2)'
      : 'rgba(88,174,213,0.2)'};
  border-radius: 8px;
  padding: 5px 5px;
  margin: 10px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    background-color: ${(props) => obterCorPorOpcao(props.$opcaoCorFaixa)};
    border-radius: 6px 0 0 6px;
  }
`;

const Alerta: React.FC<PropsAlerta> = ({
  text,
  $opcaoCorTexto = 'cor1',
  $opcaoCorCard,
  $opcaoCorFaixa
}) => {
  return (
    <EstilizadoCard
      $opcaoCorCard={$opcaoCorCard || 'cor1'}
      $opcaoCorFaixa={$opcaoCorFaixa || 'cor1'}
    >
      <EstilizadoAlerta $opcaoCorTexto={$opcaoCorTexto}>
        {text}
      </EstilizadoAlerta>
    </EstilizadoCard>
  );
};

export default Alerta;
