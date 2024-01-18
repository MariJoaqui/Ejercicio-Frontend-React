import React from 'react';
import './Information.css';

function Information( props ) {
  return (
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
          <button>Editar Rol</button>
          <button>Terminar Mentoría</button>
        </div>
      </div>
    </div>
  );
}

export default Information;