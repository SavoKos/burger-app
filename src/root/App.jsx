import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import Auth from '../containers/Auth/Auth';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../containers/Checkout/Checkout';
import ContactData from '../containers/Checkout/ContactData/ContactData';
import Orders from '../containers/Orders/Orders';
import Purchased from '../containers/Purchased/Purchased';

import 'antd/dist/antd.css';
import { loadLocalStorage } from '../store/actions/auth';

class App extends Component {
  render() {
    const token = localStorage.getItem('token');
    if (token) this.props.onLoadLocalStorage();

    return (
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/checkout/contact-data" component={ContactData} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/purchased" exact component={Purchased} />
        <Route path="/orders" exact component={Orders} />
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
