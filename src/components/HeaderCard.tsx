import styled from 'styled-components';
import SubTitulo from './Paragrafo/Subtitulo';
import SubTitulo2 from './Paragrafo/Subtitulo2';

interface PropsHeaderCard {
  data: {
    text_icon: {
      icon: string;
    };
    date_br: string;
  };
}

const ContainerLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 10px 0 10px;
`;

const ContainerSubTitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 50px;
`;

const ContainerImagem = styled.div`
  flex-shrink: 0;
  padding-left: 30px;
`;

const HeaderCard: React.FC<PropsHeaderCard> = ({ data }) => {
  const obterDiaDaSemana = (dateString: string) => {
    const partesData = dateString.split('/');
    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1; // Ajuste do índice do mês
    const ano = parseInt(partesData[2], 10);

    const data = new Date(ano, mes, dia);

    const opcoes: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return data.toLocaleDateString('pt-BR', opcoes);
  };
  return (
    <ContainerLinha>
      {data && (
        <>
          {data.text_icon && (
            <ContainerImagem>
              <img src={data.text_icon.icon} />
            </ContainerImagem>
          )}
          <ContainerSubTitulo>
            <SubTitulo color="#9c9c9c" text={data.date_br} />
            <SubTitulo2 color="#9c9c9c" text={obterDiaDaSemana(data.date_br)} />
          </ContainerSubTitulo>
        </>
      )}
    </ContainerLinha>
  );
};

export default HeaderCard;
