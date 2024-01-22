import React from 'react';
import './FlatButtons.css';

function FlatButtons({ data, isActive, onClick }) {
  // Estilo de los botones según su estado 
  const buttonStyle = {
    borderBottom: isActive ? '2px solid #41AF64' : '1px solid #DDDDDD',
    color: isActive ? '#41AF64' : '#000000',
  };

  return (
    <button 
      className='flat-button' 
      style={ buttonStyle } 
      onClick={ onClick }>
      {data.title}
    </button>
  );
}

export default FlatButtons;