import React from 'react';
import './FlatButtons.css';

function FlatButtons({ data }) {
  return (
    <button className='flat-button'>
      { data.title }
    </button>
  );
}

export default FlatButtons;