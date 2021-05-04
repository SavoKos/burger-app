import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { reinitializeBurgerState } from '../../store/actions/burgerBuilderActons';
import { reinitializeOrderState } from '../../store/actions/orders';

class Purchased extends Component {
  componentDidMount() {
    this.props.onReinitializeBurgerState();
  }

  backToBuilderHandler = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Fragment>
        <h1>Thank you for purchasing the burger. Enjoy it!</h1>
        <h2>Burger will be delivered at your address soon</h2>
        <button
          onClick={this.backToBuilderHandler}
          style={{ background: '#FBAB17', marginTop: '40px' }}
        >
          Back to builder
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isPurchased: state.orders.purchased,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onReinitializeBurgerState: () => dispatch(reinitializeBurgerState()),
    onReinitializeOrderState: () => dispatch(reinitializeOrderState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchased);
