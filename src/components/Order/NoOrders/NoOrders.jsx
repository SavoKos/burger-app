import React from 'react';
import { Link } from 'react-router-dom';

import './noOrders.scss';

const NoOrders = () => {
  return (
    <div className="no-orders">
      <h1>You have not ordered anything yet.</h1>
      <Link to="/" exact="true" className="start-ordering">
        Start Ordering
      </Link>
    </div>
  );
};

export default NoOrders;
