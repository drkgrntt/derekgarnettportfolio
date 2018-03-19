import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { checkAccessField } from '../actions';

class AccessField extends Component {
  onSubmit(value) {
    this.props.checkAccessField(value);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="center">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h2>Access Code</h2>
          <Field
            component="input"
            type="password"
            className="text-input margin"
            name="password"
          />
          <br />
          <button
            type="submit"
            className="button margin"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'AccessFieldForm'
})(
  connect(null, { checkAccessField })(AccessField)
);
