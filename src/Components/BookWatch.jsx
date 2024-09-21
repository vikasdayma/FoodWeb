import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BookWatch = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50,marginBottom:0 }, 
        { 
          opacity: 1, 
          y: 0, 
          marginBottom:200,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play none none reverse",
          }
        });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div>
      {[...Array(3)].map((_, index) => (
        <div 
          key={index} 
          ref={addToRefs} 
          style={{ 
            height: '100vh', 
            marginBottom: '20px', // Add marginBottom here
            background: index % 2 === 0 ? 'lightblue' : 'lightcoral', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <h1>Section {index + 1}</h1>
        </div>
      ))}
    </div>
  );
};

export default BookWatch;
