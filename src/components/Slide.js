import { useState, useEffect } from 'react';
import home1 from '../home1.jpg';
import home2 from '../home2.jpg';
import home3 from '../home3.jpg';

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [home1, home2, home3];
  
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  useEffect(() => {
    // 3초마다 이미지 변경
    const interval = setInterval(() => {
        setActiveIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);    

  return (
    <div className="slide-container">
      <div className="slide-image">
        <img src={images[activeIndex]} alt="slide" />
      </div>
      <div className="slide-nav">
        <button onClick={goToPrevSlide}>〈</button>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={goToNextSlide}>〉</button>
      </div>
    </div>
  );
};

export default Slide;
