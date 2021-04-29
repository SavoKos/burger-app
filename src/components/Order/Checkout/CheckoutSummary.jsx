import React from 'react';
import Burger from '../../Burger/Burger';

import './checkoutSummary.scss';

const CheckoutSummary = props => {
  return (
    <div className="checkout-summary">
      <h1>We hope it tastes well!</h1>
      <Burger ingredients={props.ingredients} />
      <div className="btn">
        <button className="cancel" onClick={props.checkoutCancel}>
          CANCEL
        </button>
        <button className="continue" onClick={props.checkoutContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
