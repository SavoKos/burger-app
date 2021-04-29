import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/Checkout/CheckoutSummary';
import { reinitializeState } from '../../store/actions/burgerBuilderActons';

class Checkout extends Component {
  checkoutCancelHandler = () => {
    this.props.history.replace('/');
    this.props.onCheckoutCancel();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  componentDidMount = () => {
    if (!this.props.ingredients || this.props.purchased) {
      this.props.onCheckoutCancel();
    }
  };

  render() {
    if (!this.props.ingredients || this.props.purchased) {
      return <Redirect to="/" />;
    }

    return (
      <CheckoutSummary
        ingredients={this.props.ingredients}
        checkoutContinue={this.checkoutContinueHandler}
        checkoutCancel={this.checkoutCancelHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.orders.purchased,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckoutCancel: () => dispatch(reinitializeState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
