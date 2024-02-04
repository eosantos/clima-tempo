import React from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useClima from '@/hooks/useClima';

// Interface para representar a estrutura dos dados de clima
interface ClimaData {
  text_icon: {
    icon: string;
    text: {
      pt: string;
    };
  };
  date_br: string;
  temperature: {
    min: number;
    max: number;
  };
  humidity: {
    min: number;
    max: number;
  };
  sun: {
    sunrise: string;
    sunset: string;
  };
  rain: {
    probability: number;
  };
}

const CarouselComponent: React.FC = () => {
  const { climaData } = useClima();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 840 },
      items: 3
    },
    mobileL: {
      breakpoint: { max: 840, min: 560 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {climaData?.data?.length > 0 &&
          climaData.data.map((climaItem: ClimaData) => (
            <Card key={climaItem.date_br} data={climaItem} />
          ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
