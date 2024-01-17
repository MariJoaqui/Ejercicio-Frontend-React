import React from 'react';
import "./Navbar.css";

function Navbar( props ) {
  return (
    <div className="navbar spaces">
      <div className="left-section">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="center-section">
        <h1>Xolopet</h1>
      </div>
      <div className="right-section">
        <div className='spaces'>
          <i className="fa-regular fa-bell"></i>
          <i className="fa-regular fa-moon"></i>
          <h4>Cerrar sesión</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;