import styled from "styled-components";
import Paragrafo from "./Paragraph/Paragrafo";
import useClima from "@/hooks/useClima";

const StyledCard = styled.div`
  background: rgba(156, 156, 156, 0.2);
  border-radius: 8px;
  padding: 10px 5px 10px 5px;
  margin: 5px;
`;

const Informativo: React.FC = () => {
  const { climaData } = useClima();

  return (
    <StyledCard>
      {climaData && (
        <Paragrafo text={climaData.data[0].text_icon.text.pt} />
      )}
    </StyledCard>
  );
};

export default Informativo;