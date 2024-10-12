import React, { useState, useEffect, useCallback } from 'react';
import '../styles/alonso.css'

const AlonsoDuck = () => {
  const [duckPosition, setDuckPosition] = useState(60);
  const [carPosition, setCarPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const jump = useCallback(() => {
 
  }, [isJumping]);

  useEffect(() => {
    const moveCar = () => {
      let position = 0;
      let direction = 1;

      const carInterval = setInterval(() => {
        position += direction;
        if (position > 90 || position < 0) {
          direction *= -1;
        }
        setCarPosition(position);
      }, 50);

      return () => clearInterval(carInterval);
    };

    return moveCar();
  }, []);

  useEffect(() => {
    document.addEventListener('click', jump);
    return () => document.removeEventListener('click', jump);
  }, [jump]);

  return (
    <div className="fullscreen-scene">
      <div className="scene">
        <div className="construction-sign">EN CONSTRUCCIÓN</div>
        <div className="road"></div>
        <div className="car green" style={{ left: `${carPosition}%` }}>
          <div className="wheel wheel-left"></div>
          <div className="wheel wheel-right"></div>
          <div className="alonso-duck" style={{ bottom: `${duckPosition}px` }}>
            <div className="alonso-eyes">
              <div className="alonso-eye"></div>
              <div className="alonso-eye"></div>
            </div>
            <div className="alonso-eyebrows">
              <div className="alonso-eyebrow"></div>
              <div className="alonso-eyebrow"></div>
            </div>
            <div className="alonso-beard"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlonsoDuck;