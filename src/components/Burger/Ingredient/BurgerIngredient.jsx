import React from 'react';
import PropTypes from 'prop-types';

import './burgerIngredient.scss';

const BurgerIngredients = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-top':
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case 'bread-bottom':
      ingredient = <div className="BreadBottom"></div>;
      break;
    case 'bacon':
      ingredient = <div className="Bacon"></div>;
      break;
    case 'meat':
      ingredient = <div className="Meat"></div>;
      break;
    case 'cheese':
      ingredient = <div className="Cheese"></div>;
      break;
    case 'salad':
      ingredient = <div className="Salad"></div>;
      break;

    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
