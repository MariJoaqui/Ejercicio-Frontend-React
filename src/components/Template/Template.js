import React from 'react';
import './Template.css';

// Components
import Card from '../Card/Card';
import Information from '../Information/Information';
import Navbar from '../Navbar/Navbar';

function Template( props ) {
  return (
    <div className='container'>

      <Navbar />

      <div className='go-back'>
        <i className='fa-solid fa-arrow-left'></i>
      </div>

      <Information />
      
      <div className='center-buttons'>
        
        <button>Entregables</button>
        <button>Funciones</button>
        <button>Tareas</button>
        <button>Notas</button>
      </div>

      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Template;