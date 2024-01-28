'use client'
import styled from 'styled-components';
import Titulo from './Paragraph/Titulo';

const HeaderContainer = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

const HeaderCard = styled.div`  
  margin: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const TopStripe = styled.div`
  border-radius: 15px 15px 0 0;
  margin-bottom: 20px;
  background-color: #439c99;
  height: 15px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderCard>
        <TopStripe />
        <Titulo 
        text="Temperatura para São Paulo para os próximos 7 dias"
        boldWords={['São', 'Paulo', '7', 'dias']}
      />
      </HeaderCard>
    </HeaderContainer>
  );
};

export default Header;
