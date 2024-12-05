import React from 'react';
import CarouselComponent from './Carousel';
import Navigation from './Navbar';
import AccordionSection from './AccordionSection';
import TestimonialGrid from './TestimonialCarousel';
function Home() {
  return (
    <>
      <Navigation />
      <CarouselComponent />
      <AccordionSection />
      <TestimonialGrid />

    </>
  );
}

export default Home;