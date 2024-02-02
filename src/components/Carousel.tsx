import styled, { createGlobalStyle } from "styled-components";
import Card from "./Card";
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
  width: 100%;
  height: 45vh;
`;

const CarouselComponent: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 840 },
      items: 3,
    },
    mobileL: {
      breakpoint: { max: 840, min: 560 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <GlobalStyle />
      <CarouselContainer>
        <Carousel responsive={responsive}>
          <Card />
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default CarouselComponent;