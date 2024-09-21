import React, { useEffect, useState, useRef } from 'react';

const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false);
    const scrollTopRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
      <div className="scroll-top">
          {showButton && (
            <a href="#top" ref={scrollTopRef} onClick={scrollToTop}>
                Scroll to Top
            </a>
          )}
      </div>
    );
};

export default ScrollTopButton;
