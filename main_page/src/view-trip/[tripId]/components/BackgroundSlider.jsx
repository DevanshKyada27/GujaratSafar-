import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js'; // Import Typed.js

const imageList = [
  "/img1.jpg",
  "/img10.jpg",
  "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_gujrat_landscape_14_l_500_1000.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg"
];

const BackgroundSlider = ({trip}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef([]);
  const typedElementRef = useRef(null); // Ref for Typed.js element

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slideRef.current.forEach((slide, index) => {
      if (slide) {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
      }
    });
  }, [currentSlide]);

  useEffect(() => {
    if (typedElementRef.current) {
      const options = {
        strings: [
          'Ahmedabad (અમદાવાદ)', 
          'Vadodara (વડોદરા)', 
          'Gandhinagar (ગાંધીનગર)', 
          'Surat (સુરત)', 
          'Dwarka (દ્વારકા)', 
          'Somnath (સોમનાથ)', 
          'Kutch (કચ્છ)', 
          'Rajkot (રાજકોટ)', 
          'and many more....'
        ],
        typeSpeed: 120,
        loop: true
      };

      const typed = new Typed(typedElementRef.current, options);

      return () => {
        typed.destroy(); // Cleanup on component unmount
      };
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="relative w-full h-[50vh] min-h-[300px] max-h-[700px] md:h-[60vh] md:min-h-[400px]">
      {imageList.map((src, index) => (
        <img
          key={index}
          ref={el => (slideRef.current[index] = el)}
          src={src}
          alt={`slide-${index}`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${index * 100}%)` }}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-xl" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 text-white">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Welcome To, <span style={{color: 'rgb(232, 176, 108)'}}>{trip?.userSelection?.destination}</span></h1>
        <h2 className="text-2xl font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Explore <span ref={typedElementRef} className="text-lg" style={{color: 'rgb(232, 176, 108)'}}></span>
        </h2>
      </div>
    </div>
  );
};

export default BackgroundSlider;
