import React from 'react';
import uniqid from 'uniqid';

import './BuildControls.scss';

import BuildControl from './BuildControl';

const BuildControls = props => {
  const controlJSX = Object.keys(props.ingredients).map(ing => (
    <BuildControl
      label={ing}
      key={uniqid()}
      add={() => props.add(ing)}
      remove={() => props.remove(ing)}
    />
  ));

  return (
    <div className="controls-container">
      <p className="total-price">Total: ${props.price.toFixed(2)}</p>
      {controlJSX}
      <button disabled={props.purchasedIngredients < 1} onClick={props.order}>
        Order NOW
      </button>
    </div>
  );
};

export default BuildControls;
