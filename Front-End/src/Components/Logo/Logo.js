import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma3 mt0 w4">
      <Tilt className="tilt-img">
        <div className="Tilt shadow-2 pa3">
          <img alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo