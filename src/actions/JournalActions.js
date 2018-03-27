import firebase from 'firebase';
import { reset } from 'redux-form';
import {
  FETCH_JOURNAL_ENTRIES,
  FETCH_JOURNAL_ENTRY,
  UNFETCH_JOURNAL_ENTRY,
  CHECK_ACCESS_FIELD
} from './types';

export const saveJournalEntry = ({ title, content }, history) => {
  return (dispatch) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const created = `${days[date.getDay()]} - ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

    firebase.database().ref('/journals')
      .push({ title, content, created })
      .then((journal) => {
        history.push(`/journal/${journal.path.pieces_[1]}`);
      });    
  };
};

export const fetchJournalEntries = () => {
  return (dispatch) => {
    firebase.database().ref('/journals')
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_JOURNAL_ENTRIES, payload: snapshot.val() });
    });
  };
};

export const deleteJournalEntry = (uid, history) => {
  return (dispatch) => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      history.push('/journal');
      firebase.database().ref(`/journals/${uid}`)
        .remove()
        .then(() => {
          dispatch(fetchJournalEntries());
      });
    }
  };
};

export const fetchJournalEntry = (uid) => {
  return (dispatch) => {
    firebase.database().ref(`/journals/${uid}`)
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_JOURNAL_ENTRY, payload: [snapshot.val(), uid] });
    });
  };
};

export const updateJournalEntry = ({ title, content }, uid, history) => {
  return (dispatch) => {
    history.push(`/journal/${uid}`)
    firebase.database().ref(`/journals/${uid}`)
      .update({ title, content })
      .then(() => {
        dispatch(reset('JournalForm'));
    });
  };
};

export const unfetchJournalEntry = () => {
  return (dispatch) => {
    dispatch({ type: UNFETCH_JOURNAL_ENTRY });
  };
};

export const checkAccessField = ({ password }) => {
  return (dispatch) => {
    firebase.database().ref('/env/accessCode')
      .on('value', (snapshot) => {
        if (snapshot.val() === password) {
          return dispatch({ type: CHECK_ACCESS_FIELD, payload: 'authenticated' });
        }

        return dispatch({ type: CHECK_ACCESS_FIELD, payload: password });
      });
  };
};
