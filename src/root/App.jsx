import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';

import 'antd/dist/antd.css';
import { loadLocalStorage } from '../store/actions/auth';
import Spinner from '../components/UI/Spinner/Spinner';

const Checkout = lazy(() => import('../containers/Checkout/Checkout'));
const Auth = lazy(() => import('../containers/Auth/Auth'));
const ContactData = lazy(() =>
  import('../containers/Checkout/ContactData/ContactData')
);
const Purchased = lazy(() => import('../containers/Purchased/Purchased'));
const Orders = lazy(() => import('../containers/Orders/Orders'));

class App extends Component {
  render() {
    const token = localStorage.getItem('token');
    if (token) this.props.onLoadLocalStorage();

    return (
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Route path="/checkout" component={Checkout} />
          <Route path="/checkout/contact-data" component={ContactData} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/purchased" exact component={Purchased} />
          <Route path="/orders" exact component={Orders} />
        </Suspense>
        <Route path="/" exact component={BurgerBuilder} />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadLocalStorage: () => dispatch(loadLocalStorage()),
  };
};

export default connect(null, mapDispatchToProps)(App);
