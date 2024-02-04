import styled from 'styled-components';
import SubTitulo from './Paragraph/Subtitulo';
import SubTitulo2 from './Paragraph/Subtitulo2';

interface HeaderCardProps {
  data: {
    text_icon: {
      icon: string;
    };
    date_br: string;
  };
}

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 10px 0 10px;
`;

const SubTituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 50px;
`;

const ImgContainer = styled.div`
  flex-shrink: 0;
  padding-left: 30px;
`;

const HeaderCard: React.FC<HeaderCardProps> = ({ data }) => {
  const getDayOfWeek = (dateString: string) => {
    const dateParts = dateString.split('/');
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Ajuste do índice do mês
    const year = parseInt(dateParts[2], 10);

    const date = new Date(year, month, day);

    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return date.toLocaleDateString('pt-BR', options);
  };
  return (
    <RowContainer>
      {data && (
        <>
          {data.text_icon && (
            <ImgContainer>
              <img src={data.text_icon.icon} />
            </ImgContainer>
          )}
          <SubTituloContainer>
            <SubTitulo color="#9c9c9c" text={data.date_br} />
            <SubTitulo2 color="#9c9c9c" text={getDayOfWeek(data.date_br)} />
          </SubTituloContainer>
        </>
      )}
    </RowContainer>
  );
};

export default HeaderCard;
