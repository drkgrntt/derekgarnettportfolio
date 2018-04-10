import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import renderHTML from 'react-render-html';
import AccessField from './AccessField';
import { unfetchJournalEntry, fetchJournalEntry, deleteJournalEntry } from '../../actions';

class ShowJournal extends Component {
  componentDidMount() {
    const { uid } = this.props.match.params;

    this.props.fetchJournalEntry(uid);
  }

  onDeleteClick() {
    const { deleteJournalEntry, uid, history } = this.props;

    deleteJournalEntry(uid, history);
  }

  onBackClick() {
    this.props.unfetchJournalEntry();
  }

  renderAuthButtons() {
    if (this.props.access === 'authenticated') {
      return (
        <div style={{ float: 'right' }}>
          <Link to="/journal">
            <button 
              className="button"
              onClick={this.onBackClick.bind(this)}
            >
              Back
            </button>
          </Link>
          <button className="button" onClick={this.onDeleteClick.bind(this)}>
            Delete
          </button>
          <Link to='/journal'>
            <button className="button">
              Edit
            </button>
          </Link>
        </div>
      );
    }
  }

  renderContent() {
    const { journal } = this.props;

    if (journal === undefined || journal === null) {
      return <h1>Loading . . .</h1>;
    }

    return (
      <div className="container" style={{ marginTop: '40px', marginBottom: '80px' }}>
        <div>
          <h2 style={{ display: 'inline' }}>{journal.title}</h2>
          <span style={{ float: 'right' }}>{journal.created}</span>
        </div>
        <span>{renderHTML(journal.content)}</span>
        {this.renderAuthButtons()}
      </div>
    );
  }

  render() {
    const { access, uid } = this.props;

    if (access === 'authenticated' || access === uid) {
      return (
        <div>
          {this.renderContent()}
        </div>
      );
    }

    return <AccessField />;
  }
}

const mapStateToProps = ({ journals }) => {
  return { journal: journals.selectedJournal, uid: journals.selectedUid, access: journals.access };
};

export default connect(mapStateToProps, { unfetchJournalEntry, fetchJournalEntry, deleteJournalEntry })(withRouter(ShowJournal));