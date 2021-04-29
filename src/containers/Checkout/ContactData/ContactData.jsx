import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Select from '../../../components/UI/Select/Select';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { sendOrderBurgerRequest } from '../../../store/actions/orders';

import './contactData.scss';

class ContactData extends Component {
  inputData = (type, name, placeholder, value, required) => {
    if (name === 'delivery') return { type, name, value };
    return {
      type,
      name,
      value,
      required,
      placeholder,
    };
  };

  state = {
    orderForm: {
      name: this.inputData('text', 'name', 'Name', '', true),
      email: this.inputData('email', 'email', 'Email', '', true),
      street: this.inputData('text', 'street', 'Street', '', true),
      zipcode: this.inputData('text', 'zip', 'ZIP Code', '', false),
      country: this.inputData('text', 'country', 'Country', '', true),
      deliveryMethod: this.inputData(null, 'delivery', null, 'normal', false),
    },
  };

  inputChangedHandler = (e, orderFormEl) => {
    const stateOrderFormCopy = { ...this.state.orderForm };
    const stateOrderFormElCopy = { ...stateOrderFormCopy[orderFormEl] };

    stateOrderFormElCopy.value = e.target.value;
    stateOrderFormCopy[orderFormEl] = stateOrderFormElCopy;

    this.setState({ orderForm: stateOrderFormCopy });
  };

  orderBurgerHandler = e => {
    e.preventDefault();

    const orderForm = {};
    for (let formElement in this.state.orderForm) {
      orderForm[formElement] = this.state.orderForm[formElement].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: orderForm,
    };

    this.props.onBurgerOrder(order);
  };

  render() {
    if (!this.props.ingredients) return <Redirect to="/" />;

    if (this.props.loading) return <Spinner />;

    const data = Object.keys(this.state.orderForm).map(el => {
      const orderFormEl = this.state.orderForm[el];

      if (orderFormEl.placeholder)
        return (
          <input
            key={el}
            onChange={e => this.inputChangedHandler(e, el)}
            placeholder={orderFormEl.placeholder}
            type={orderFormEl.type}
            name={orderFormEl.name}
            value={orderFormEl.value}
            required={orderFormEl.required}
          />
        );

      return (
        <Select
          key={el}
          name={orderFormEl.name}
          value={orderFormEl.value}
          changeDelivery={e => this.inputChangedHandler(e, el)}
        />
      );
    });

    return (
      <div className="contact-data">
        <h1>Enter your Contact Data</h1>
        <form onSubmit={this.orderBurgerHandler}>
          {data}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.orders.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBurgerOrder: orderData => dispatch(sendOrderBurgerRequest(orderData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
