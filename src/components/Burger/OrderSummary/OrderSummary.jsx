import React, { Fragment } from 'react';

import uniqid from 'uniqid';

const OrderSummary = props => {
  const ingredient = Object.keys(props.ingredients).map(ing => (
    <li key={uniqid()}>
      {ing}: {props.ingredients[ing]}
    </li>
  ));

  return (
    <Fragment>
      <i className="fas fa-times" onClick={props.closeModal}></i>
      <h1>Your Order</h1>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredient}</ul>
      <h3 className="price">
        Total: <span>${props.price.toFixed(2)}</span>
      </h3>
      <button className="cancel" onClick={props.closeModal}>
        Cancel
      </button>
      <button className="continue" onClick={props.continuePurchasing}>
        Continue
      </button>
    </Fragment>
  );
};

export default OrderSummary;
