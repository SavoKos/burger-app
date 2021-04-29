import React, { Component, Fragment } from 'react';
import axios from '../../root/axios-orders';
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import { initPurchase } from '../../store/actions/orders';
import {
  addIngredient,
  initIngredients,
  reinitializeState,
  removeIngredient,
} from '../../store/actions/burgerBuilderActons';

class App extends Component {
  state = {
    purchasing: false,
    loading: false,
  };

  componentDidMount = () => {
    this.props.onInitIngredients();
    this.props.onInitPurchase();
    this.props.onReinitializeState();
  };

  checkoutHandler = () => {
    this.setState({ purchasing: true });
  };

  closeModalHandler = () => {
    this.setState({ purchasing: false });
  };

  continuePurchasingHandler = () => {
    this.props.history.replace('/checkout');
  };

  render() {
    let burger,
      orderSummary = <Spinner />;

    if (this.props.ingredients)
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredients={this.props.ingredients}
            add={this.props.onAddIngredient}
            remove={this.props.onRemoveIngredient}
            price={this.props.totalPrice}
            purchasedIngredients={this.state.purchasedIngredients}
            order={this.checkoutHandler}
          />
        </Fragment>
      );

    if (this.props.ingredients)
      orderSummary = (
        <OrderSummary
          continuePurchasing={this.continuePurchasingHandler}
          ingredients={this.props.ingredients}
          closeModal={this.closeModalHandler}
          price={this.props.totalPrice}
        />
      );

    if (this.state.loading) orderSummary = <Spinner />;
    return (
      <Fragment>
        {burger || <Spinner />}
        <Modal
          active={this.state.purchasing}
          closeModal={this.closeModalHandler}
        >
          {orderSummary || <Spinner />}
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    purchasedIngredients: state.burgerBuilder.purchasedIngredients,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: ingredient => dispatch(addIngredient(ingredient)),
    onRemoveIngredient: ingredient => dispatch(removeIngredient(ingredient)),
    onInitIngredients: () => dispatch(initIngredients()),
    onInitPurchase: () => dispatch(initPurchase()),
    onReinitializeState: () => dispatch(reinitializeState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(App, axios));
