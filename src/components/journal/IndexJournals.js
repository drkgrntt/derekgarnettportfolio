import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import { fetchJournalEntries } from '../../actions';

class IndexJournals extends Component {
  componentDidMount() {
    this.props.fetchJournalEntries();
  }

  renderJournalPreview() {
    return _.map(this.props.journals, (journal) => {
      return (
        <div key={journal.uid}>
          <div style={{ marginLeft: '20px'}}>
            <div>
              <h2 style={{ display: 'inline' }}>{journal.title}</h2>
              <span style={{ float: 'right' }}>{journal.created}</span>
            </div>
            <span>{renderHTML(journal.content.substring(0, 200))}. . .</span>
            <Link to={`/journal/${journal.uid}`} style={{ float: 'right' }}>
              <button className="button">Show More</button>
            </Link>
          </div>
          <br />
          <hr />
        </div>
      );
    }).reverse();
  }

  render() {
    return (
      <div className="index-journals">
        <h1 className="center">Entries</h1>
        <hr />
        {this.renderJournalPreview()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const journals = _.map(state.journals.entries, (val, uid) => {
    return { ...val, uid };
  });

  return { journals };
};

export default connect(mapStateToProps, { fetchJournalEntries })(IndexJournals);