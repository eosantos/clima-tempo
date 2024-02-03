'use client';
import styled from 'styled-components';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';

const Container = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Header />
        <Carousel />      
      <Footer />
    </Container>      
  );
}
