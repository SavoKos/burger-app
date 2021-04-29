import React from 'react';

import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

import './navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Navigation;
