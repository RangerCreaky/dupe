import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function App() {
  const slides = [
    {
      url: './images/carousel/desktop/banner1.png',
      urlmob: './images/carousel/mobile/banner1.png'
    },
    {
      url: './images/carousel/desktop/banner2.png',
      urlmob: './images/carousel/mobile/banner2.png'
    },
    {
      url: './images/carousel/desktop/banner3.png',
      urlmob: './images/carousel/mobile/banner3.png'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-screen h-[88vh] m-auto group'>
      <div className='w-full md:h-[104px] h-[180px] -z-10 bg-white'></div>
      <div
        className='w-full h-[88vh-104px] bg-cover flex duration-500'
      >
        <p>  </p>
        <img className="md:block hidden h-full w-full" src={`${slides[currentIndex].url}`} alt="carousel 1" />
        <img className="block md:hidden h-full w-full" src={`${slides[currentIndex].urlmob}`} alt="carousel 1" />
      </div>




      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div >
  );
}

export default App;
