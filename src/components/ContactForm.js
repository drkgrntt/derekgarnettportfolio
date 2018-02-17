import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { saveMessage } from '../actions';

class ContactForm extends Component {
  renderTextField(field) {
    return (
      <div>
        <h5>{field.label}</h5>
        <input
          placeholder={field.label}
          type="text"
          className="text-input"
          {...field.input}
        />
      </div>
    );
  }

  renderTextAreaField(field) {
    return (
      <div>
        <h5>{field.label}</h5>
        <textarea
          rows="10"
          className="text-area-input"
          placeholder={field.label}
          type="textarea"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { saveMessage } = this.props;

    saveMessage(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="center">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div style={{ display: 'block' }}>
            <Field
              label="Your Name"
              name="name"
              component={this.renderTextField}
            />
            <Field
              label="Your Email"
              name="email"
              component={this.renderTextField}
            />
          </div>
          <Field
            label="Tell me about your project"
            name="content"
            component={this.renderTextAreaField}
          />
          <button
            type="submit"
            className="button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'ContactForm'
})(
  connect(null, { saveMessage })(ContactForm)
);
