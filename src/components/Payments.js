import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handlePayment } from '../actions';

class Payments extends Component {
  constructor(props) {
    super(props);

    this.state = { amount: 1 };
  }

  render() {
    const { amount } = this.state;

    return (
      <div className="center">
        <h3>Amount (USD)</h3>
        <input
          className="text-input"
          type="number"
          min="1"
          value={amount}
          onChange={event => this.setState({ amount: event.target.value })}
        />
        <br /><br />
        <StripeCheckout
          name="Donate"
          token={token => this.props.handlePayment(token, amount)}
          amount={amount * 100}
          stripeKey="pk_test_cLLdIAolhPILe2YLPsaoxUEZ"
        >
          <button className="button">
            Pay with a card
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, { handlePayment })(Payments);
