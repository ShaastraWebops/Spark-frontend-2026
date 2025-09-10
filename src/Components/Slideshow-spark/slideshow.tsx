import React, { useState, useEffect, useRef } from "react";
// Import your images
import i1 from "../../assets/i1.webp";
import i2 from "../../assets/i2.jpeg";
import i3 from "../../assets/i3.jpeg";
import i4 from "../../assets/i4.jpeg";
import i5 from "../../assets/i5.jpeg";
import i6 from "../../assets/i7.jpeg";
import i7 from "../../assets/1.jpg";
import i8 from "../../assets/2.jpg";

const Slideshow: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const images: string[] = [i1, i2, i3, i4, i5, i6, i7, i8];
  const delay: number = 3000; // Increased delay slightly for a calmer feel

  // The existing timer and transition logic is preserved
  const timeoutRef = useRef<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
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
  }, [index, isTransitioning,images.length]);

  const handleDotClick = (idx: number) => {
    if (idx === 0 && index === images.length - 1) {
      setIsTransitioning(false);
    }
    setIndex(idx);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full bg-slate-900 font-sans">
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
          Shaastra Juniors
        </h3>
        
        {/* Slideshow Container */}
        <div className="relative h-64 md:h-96 lg:h-[550px] rounded-xl overflow-hidden shadow-2xl shadow-blue-900/40">
          {images.map((image, idx) => (
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              key={idx}
            >
              <img src={image} className="w-full h-full object-cover" alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          aria-label="Previous slide"
          className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 -translate-y-1/2 right-2 md:right-6 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
              }`}
              onClick={() => handleDotClick(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;