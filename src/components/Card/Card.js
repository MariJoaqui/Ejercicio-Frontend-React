import React from 'react';
import './Card.css';

function Card( props ) {
  return (
    <div className='card display-flex spaces'>
      <h4>Función número 1</h4>
      <div className='display-flex rating'>
        <p>Conoce la teoría</p>
        <div className='display-flex spaces'>
          <div className='button-rating'></div>
          <div className='button-rating'></div>
          <div className='button-rating'></div>
          <div className='button-rating'></div>
          <div className='button-rating'></div>
        </div>
      </div>
    </div>
  );
}

export default Card;