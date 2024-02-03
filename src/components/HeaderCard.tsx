import styled from "styled-components";
import SubTitulo from "./Paragraph/Subtitulo";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


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
    const date = new Date(dateString);
    return format(date, "eeee", { locale: ptBR });
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
            <SubTitulo bold fontSize="large" text={data.date_br} />
            <SubTitulo text={getDayOfWeek(data.date_br)} />
          </SubTituloContainer>
        </>
      )}
    </RowContainer>
  );
};

export default HeaderCard;
