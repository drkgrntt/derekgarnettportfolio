import React, { Component } from 'react';
import Payments from './Payments';

class Donate extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="center">Donate</h1>
        <hr />
        <Payments />
      </div>
    );
  }
}

export default Donate;
