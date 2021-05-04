import React from 'react';
import uniqid from 'uniqid';

import './BuildControls.scss';

import BuildControl from './BuildControl';
import { connect } from 'react-redux';

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
        {props.authToken ? 'Order NOW' : 'Login to order'}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authToken: state.auth.token,
  };
};

export default connect(mapStateToProps)(BuildControls);
