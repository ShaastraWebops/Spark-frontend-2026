import "./slideshow.scss";
import i1 from "../../assets/i1.webp";
import i2 from "../../assets/i2.jpeg";
import i3 from "../../assets/i3.jpeg";
import i4 from "../../assets/i4.jpeg";
import i5 from "../../assets/i5.jpeg";
import i6 from "../../assets/i7.jpeg";
import i7 from "../../assets/1.jpg";
import i8 from "../../assets/2.jpg";
import React, { useState } from "react";
const Slideshow: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const images: string[] = [i1, i2, i3, i4, i5, i6, i7, i8];
  const delay: number = 2500;
  
  const timeoutRef = React.useRef<number | null>(null);

  const [isTransitioning, setIsTransitioning] = React.useState<boolean>(true);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();

    if (!isTransitioning) {
      timeoutRef.current = window.setTimeout(() => {
        setIsTransitioning(true);
        setIndex(0); 
      }, 20); 
    } else {
      timeoutRef.current = window.setTimeout(
        () => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
        delay
      );
    }


    return () => {
      resetTimeout();
    };
  }, [index, isTransitioning]);

  const handleDotClick = (idx: number) => {
    if (idx === 0 && index === images.length - 1) {
      setIsTransitioning(false);
    }
    setIndex(idx);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="slideshow">
      <h3 className='about-head'>Shaastra Juniors</h3>
      <div className="slideshowSlider">
        {images.map((image, idx) => (
          <div
            className={`slide ${index === idx ? "active" : ""}`}
            key={idx}
          >
            <img src={image} className="slide-img" alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => handleDotClick(idx)}
          ></div>
        ))}
      </div>

      <button className="arrow prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
