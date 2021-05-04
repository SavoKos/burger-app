import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { reinitializeState } from '../../store/actions/burgerBuilderActons';
import { initPurchase } from '../../store/actions/orders';

const Purchased = props => {
  const history = useHistory();

  const backToBuilderHandler = () => {
    props.onInitPurchase();
    props.onReinitializeOrdersState();
    history.push('/');
  };

  return (
    <Fragment>
      <h1>Thank you for purchasing the burger. Enjoy it!</h1>
      <h2>Burger will be delivered at your address soon</h2>
      <button
        onClick={backToBuilderHandler}
        style={{ background: '#FBAB17', marginTop: '40px' }}
      >
        Back to builder
      </button>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isPurchased: state.orders.purchased,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPurchase: () => dispatch(initPurchase()),
    onReinitializeOrdersState: () => dispatch(reinitializeState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchased);
