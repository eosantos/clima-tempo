import styled from 'styled-components';
import Paragrafo from './Paragraph/Paragrafo';

interface InformativoProps {
  data: {
    text_icon: {
      text: {
        pt: string;
      };
    };
  };
}

const StyledCard = styled.div`
  background: rgba(156, 156, 156, 0.2);
  border-radius: 8px;
  padding: 10px 5px 10px 5px;
  margin: 5px;
`;

const Informativo: React.FC<InformativoProps> = ({ data }) => {
  return (
    <StyledCard>
      {data.text_icon.text && <Paragrafo text={data.text_icon.text.pt} />}
    </StyledCard>
  );
};

export default Informativo;
