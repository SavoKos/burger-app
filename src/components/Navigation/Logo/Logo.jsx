import React from 'react';
import { Link } from 'react-router-dom';

import burgerLogo from '../../../assets/images/burger-logo.png';

const Logo = props => {
  return (
    <div className="logo">
      <Link to="/" onClick={props.closeSlider}>
        <img src={burgerLogo} alt="Burger Logo" />
      </Link>
    </div>
  );
};

export default Logo;
