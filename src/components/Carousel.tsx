import React from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useClima, { ClimaData } from '@/hooks/useClima';

const CarouselComponent: React.FC = () => {
  const { climaData, loading, error } = useClima();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const data = climaData?.data || [];

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
        {data.map((climaItem: ClimaData) => (
          <Card key={climaItem.date_br} data={climaItem} />
        ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
