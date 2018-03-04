import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { saveReview } from '../actions';

class Review extends Component {
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
    const { saveReview, history } = this.props;

    saveReview(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="center" style={{ marginBottom: '50px' }}>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div style={{ display: 'block' }}>
            <Field
              label="Your Name"
              name="name"
              component={this.renderTextField}
            />
            <Field
              label="Your Website"
              name="website"
              component={this.renderTextField}
            />
          </div>
          <Field
            label="Leave your review here"
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
  form: 'ReviewForm'
})(
  connect(null, { saveReview })(withRouter(Review))
);
