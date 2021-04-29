import React from 'react';

import './overlay.scss';

const Overlay = props => {
  return props.active ? (
    <div className="overlay" onClick={props.clicked}></div>
  ) : null;
};

export default Overlay;
