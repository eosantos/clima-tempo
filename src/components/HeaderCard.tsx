import styled from "styled-components";
import SubTitulo from "./Paragraph/Subtitulo";
import useClima from "@/hooks/useClima";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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

const HeaderCard: React.FC = () => {
  const { climaData } = useClima();

  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "eeee", { locale: ptBR });
  };

  return (
    <RowContainer>
      {climaData && (
        <>
          {climaData.data[0].text_icon && (
            <ImgContainer>
              <img src={climaData.data[0].text_icon.icon} />
            </ImgContainer>
          )}
          <SubTituloContainer>
            <SubTitulo bold fontSize="large" text={climaData.data[0].date_br} />
            <SubTitulo text={getDayOfWeek(climaData.data[0].date_br)} />
          </SubTituloContainer>
        </>
      )}
    </RowContainer>
  );
};

export default HeaderCard;
