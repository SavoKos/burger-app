import React from 'react';
import uniqid from 'uniqid';

import BurgerIngredients from './Ingredient/BurgerIngredient';

import './burger.scss';

const Burger = props => {
  let allIngredients = [];
  Object.entries(props.ingredients).forEach(ent => {
    for (let i = 0; i < ent[1]; i++) {
      allIngredients.push(ent[0]);
    }
  });

  let burgerJSX = allIngredients.map(ing => (
    <BurgerIngredients type={ing} key={uniqid()} />
  ));

  if (allIngredients.length < 1)
    burgerJSX = <p>Please start adding ingredients.</p>;

  return (
    <div className="burger">
      <BurgerIngredients type="bread-top" />
      {burgerJSX}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
