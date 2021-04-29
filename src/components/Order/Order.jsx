import React from 'react';

import Burger from '../Burger/Burger';

import './order.scss';

const Order = props => {
  const ingredientsList = Object.keys(props.ingredients).filter(
    ing => props.ingredients[ing] > 0
  );

  const orderIngredients = ingredientsList.map(ingredient => {
    return `${ingredient[0].toUpperCase() + ingredient.slice(1)}  x${
      props.ingredients[ingredient]
    } \xa0`;
  });

  return (
    <div className="order">
      <div className="info">
        <h2 className="title">Burger with {ingredientsList.join(', ')}</h2>
        <h5 className="ingredients">{orderIngredients}</h5>
        <h3 className="price">${props.price.toFixed(2)}</h3>
      </div>
      <Burger ingredients={props.ingredients} />
    </div>
  );
};

export default Order;
