import React from 'react';

const BuildControl = props => {
  return (
    <div className="control">
      <p className="label">{props.label}</p>
      <div className="buttons">
        <i className="fas fa-plus fa-lg" onClick={props.add}></i>
        <i className="fas fa-minus fa-lg" onClick={props.remove}></i>
      </div>
    </div>
  );
};

export default BuildControl;
