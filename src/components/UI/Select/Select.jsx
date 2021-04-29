import React from 'react';

import './select.scss';

const Select = props => {
  return (
    <div className="delivery">
      <select
        name={props.name}
        value={props.value}
        onChange={props.changeDelivery}
      >
        <option value="normal">Delivery - Normal</option>
        <option value="faster">Delivery - Faster</option>
        <option value="fastest">Delivery - Fastest</option>
      </select>
      <i className="fas fa-angle-down fa-lg"></i>
    </div>
  );
};

export default Select;
