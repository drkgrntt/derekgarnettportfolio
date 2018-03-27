import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccessField from './AccessField';
import IndexJournals from './IndexJournals';
import JournalForm from './JournalForm';

class Journal extends Component {
  renderContent() {
    if (this.props.auth !== 'authenticated') {
      return (
        <AccessField />
      );
    }

    return (
      <div>
        <h1>Journal</h1>
        <hr />
        <JournalForm />
        <IndexJournals />
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ journals }) => {
  return { auth: journals.access };
};

export default connect(mapStateToProps, null)(Journal);
