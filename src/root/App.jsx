import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';

import Auth from '../containers/Auth/Auth';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../containers/Checkout/Checkout';
import ContactData from '../containers/Checkout/ContactData/ContactData';
import Orders from '../containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/checkout/contact-data" component={ContactData} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
      </Layout>
    );
  }
}

export default App;
