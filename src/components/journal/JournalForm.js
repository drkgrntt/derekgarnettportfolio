import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextEditor from '../TextEditor';
import { saveJournalEntry, updateJournalEntry } from '../../actions';

class JournalForm extends Component {
  onSubmit(values) {
    const { initialValues, saveJournalEntry, updateJournalEntry, uid, history } = this.props;
    
    if (initialValues) {
      return updateJournalEntry(values, uid, history);
    }

    return saveJournalEntry(values, history);
  }

  renderField(field) {
    return (
      <div>
        <h3>{field.label}</h3>
        <input
          placeholder={field.label}
          type="text"
          className="text-input margin"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="journal-form center">
        <h2>New Journal Entry</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="title"
            label="Title"
            component={this.renderField}
          />
          <h3 className="margin">Content</h3>
          <div className="margin">
            <Field
              name="content"
              component={TextEditor}
            />
          </div>
          <button className="button margin">
            Submit Entry
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ journals }) => {
  return { initialValues: journals.selectedJournal, uid: journals.selectedUid };
};

const formConfig = reduxForm({
  form: 'JournalForm',
  enableReinitialize: true
})(JournalForm);

export default connect(
  mapStateToProps, { 
    saveJournalEntry, 
    updateJournalEntry 
  }
)(withRouter(formConfig));