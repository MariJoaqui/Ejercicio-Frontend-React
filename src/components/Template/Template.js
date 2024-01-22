import React from 'react';
import './Template.css';

// Utils
import cardsInfo from '../../utils/card-info.js';
import flatButtons from '../../utils/flat-buttons.js';

// Components
import Button from '../Button/Button';
import Card from '../Card/Card';
import FlatButtons from '../FlatButtons/FlatButtons.js';
import Navbar from '../Navbar/Navbar';

function Template( props ) {
  return (
    <div className='container'>

      {/* Componente de la barra de navegación */}
      <Navbar />

      {/* Botón de volver */}
      <div className='go-back'>
        <i className='fa-solid fa-arrow-left'></i>
      </div>

      {/* Seción de información */}
      <div className='Information spaces'>
        <div className='left-section'>
          <p>Mentoría / Mateo De la Torre</p>
          <p>ADMINISTRACIÓN</p>
        </div>
        <div className='center-section'>
          <p>Rol: <strong>NombreDelRol</strong></p>
        </div>
        <div className='right-section'>
          <p><strong>Última mentoría</strong></p>
          <p>30/06/2023 a las 3:40 am</p>
          <div>
            <Button title='Editar Rol' />
            <Button title='Siguiente' />
          </div>
        </div>
      </div>
      
      {/* Botones centrales */}
      <div className='center-buttons'>
        {
          flatButtons.map(( data, index ) => (
            <FlatButtons data={ data } key={ index } />
          ))
        }
      </div>

      {/* Cartas */}
      {
        cardsInfo.map(( card, index ) => (
          <Card data={ card } key={ index } />
        ))
      }
    </div>
  );
}

export default Template;