import React from 'react';
import './Template.css';

// Components
import Navbar from '../Navbar/Navbar';

function Template( props ) {
  return (
    <div className='container'>
      <Navbar />
      <div className='go-back'>
        <i className='fa-solid fa-arrow-left'></i>
      </div>
    </div>
  );
}

export default Template;