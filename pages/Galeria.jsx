import React from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import carrousel3 from '../img/carrousel3.jpg'
import carrousel4 from '../img/carrousel4.jpg'
import carrousel5 from '../img/carrousel5.jpg'

import carrousel6 from '../img/carrousel6.jpg'
import carrousel7 from '../img/carrousel7.jpg'
import carrousel8 from '../img/carrousel8.jpg'
import carrousel9 from '../img/carrousel9.jpg'



function MyCarousel() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    items: [

      {
        id: 'item-2',
        renderItem: <img className='imagenCarrousel' src={carrousel4} alt="" />
      },
      {
        id: 'item-3',
        renderItem: <img className='imagenCarrousel' src={carrousel3} alt="" />
      },
      {
        id: 'item-4',
        renderItem: <img className='imagenCarrousel' src={carrousel4} alt="" />
      },
      {
        id: 'item-5',
        renderItem: <img className='imagenCarrousel' src={carrousel5} alt="" />
      },
      {
        id: 'item-6',
        renderItem: <img className='imagenCarrousel' src={carrousel6} alt="" />
      },
      {
        id: 'item-7',
        renderItem: <img className='imagenCarrousel' src={carrousel7} alt="" />
      },
      {
        id: 'item-8',
        renderItem: <img className='imagenCarrousel' src={carrousel8} alt="" />
      },
      {
        id: 'item-9',
        renderItem: <img className='imagenCarrousel' src={carrousel9} alt="" />
      },
    ],
    
   
  });

  return (
    <div className='container2'>
      <div className='galeria'>
        <div className='Adelante' >
          <button onClick={slideToNextItem} className='btnAdelante'>  Adelante   </button>
          <button onClick={slideToPrevItem} className='btnAtras'>  Atras   </button>
          <br />
          <div className='container' >{carouselFragment}</div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default MyCarousel;