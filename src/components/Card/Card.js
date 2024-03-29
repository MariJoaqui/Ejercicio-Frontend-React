import React, { useState } from 'react';
import './Card.css';

function Card({ data }) {
  const [ rating, setRating ] = useState(0);

  const handleRatingClick = ( index ) => {
    setRating( index + 1 );
  };

  // Función para obtener el texto
  const getRatingText = () => {
    switch ( rating ) {
      case 1:
        return 'Conoce la teoría';
      case 2:
        return 'Realizado con mucha supervisión';
      case 3:
        return 'Realizado con poca supervisión';
      case 4:
        return 'Realizado sin supervisión';
      case 5:
        return 'Realizado con excelencia';
      default:
        return 'Calificación';
    }
  };

  return (
    <div className='card display-flex spaces'>
      <h4>{ data.title }</h4>
      <div className='display-flex rating'>
        {/* Se obtiene el texto */}
        <p>{ getRatingText() }</p>
        <div className='display-flex'>
          {
            // Se usa map para iterar sobre los botones y asignarles la clase de activo
            [...Array( 5 )].map((_, index) => (
              <div
                key={ index }
                className={`button-rating ${ index < rating ? 'active' : '' }`}
                onClick={() => handleRatingClick( index )}
              ></div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Card;