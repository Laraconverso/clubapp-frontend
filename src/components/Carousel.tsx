'use client'

import { useState } from 'react';

interface CarouselProps {
  cards: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(cards.length / 2) - 1;

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-center shadow-2xl px-5">
      <button className="text-gray-600 mr-4 text-5xl" onClick={goToPrevSlide}>
        &#8249;
      </button>
      <div className="overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out transform lg:flex-row">
          {cards.map((card, index) => {
            if (index >= currentIndex * 2 && index < (currentIndex + 1) * 2) {
              return (
                <div key={index} className=" max-w-lg p-4">
                  {card}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <button className="text-gray-600 ml-4 text-5xl" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;