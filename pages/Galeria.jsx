import React, { useRef, useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import carrousel3 from '../img/carrousel3.jpg';
import carrousel4 from '../img/carrousel4.jpg';
import carrousel5 from '../img/carrousel5.jpg';
import carrousel6 from '../img/carrousel6.jpg';
import carrousel7 from '../img/carrousel7.jpg';
import carrousel8 from '../img/carrousel8.jpg';
import carrousel9 from '../img/carrousel9.jpg';
import carrousel10 from '../img/carrousel10.jpg';
import carrousel11 from '../img/carrousel11.jpg';

// Función Galeria que muestra una galería de imágenes

function Galeria() {
  
  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    items: [
      {
        id: 'item-1',
        renderItem: <img className='imagenCarrousel' src={carrousel3} alt="" />
      },
      {
        id: 'item-2',
        renderItem: <img className='imagenCarrousel' src={carrousel4} alt="" />
      },
      {
        id: 'item-3',
        renderItem: <img className='imagenCarrousel' src={carrousel5} alt="" />
      },
      {
        id: 'item-4',
        renderItem: <img className='imagenCarrousel' src={carrousel6} alt="" />
      },
      {
        id: 'item-5',
        renderItem: <img className='imagenCarrousel' src={carrousel7} alt="" />
      },
      {
        id: 'item-6',
        renderItem: <img className='imagenCarrousel' src={carrousel8} alt="" />
      },
      {
        id: 'item-7',
        renderItem: <img className='imagenCarrousel' src={carrousel9} alt="" />
      },
      {
        id: 'item-8',
        renderItem: <img className='imagenCarrousel' src={carrousel10} alt="" />
      },
      {
        id: 'item-9',
        renderItem: <img className='imagenCarrousel' src={carrousel11} alt="" />
      },
    ],
  });

  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        let currentIndex = 0;
        if (carouselFragment.currentIndex >= 8) {
          currentIndex = 0;
        }
        slideToNextItem(currentIndex);
      }
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused, slideToNextItem]);

  const pause = () => {
    setIsPaused(true);
  };

  const resume = () => {
    setIsPaused(false);
  };

  return (
    <div>
      <h1 className='Gallery-title'>Galeria</h1>
      <div className='container2'>
        <div className='galeria'>
          <div className='Adelante'>
            <button onClick={pause} className='btnAdelante'>
              Pausar
            </button>
            <button onClick={resume} className='btnAtras'>
              Reanudar
            </button>
            <br />
            <div className='container'>{carouselFragment}</div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galeria;

// En esta pagina se añade un carrousel de imagenes el cual tiene dos funciones, si estamos en ordenador el bucle ira automaticamente 
// y si estamos en un dispositivo tactil podremos manejar el bucle arrastrando por las imagenes el igual tambien puede ser automatico