import styled, { createGlobalStyle } from 'styled-components';
import Card from './Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Redefina os estilos globais para substituir os estilos padrão.
const GlobalStyle = createGlobalStyle`
  .react-multi-carousel-list {
    overflow: visible;
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  top: 100%;
  width: 100%;
  height: 100vh;
`;

const CarouselComponent: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <>
      <GlobalStyle />
      <CarouselContainer>
        <Carousel responsive={responsive}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default CarouselComponent;
