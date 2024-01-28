'use client';
import styled from 'styled-components';

const CardContainer = styled.div`
  max-width: 290px;
  max-height: 215px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  background-color: #439c99;
  padding: 10px;
  border: 1px solid #439c99;
  border-radius: 8px;
`;

const TopStripe = styled.div`
  background-color: #439c99;
  height: 5px;
  border-radius: 8px 8px 0 0;
`;

const Card: React.FC = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <TopStripe />
        {/* Conteúdo do card aqui */}
        <p>Seu conteúdo aqui</p>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
