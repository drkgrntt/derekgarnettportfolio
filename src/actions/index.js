import firebase from 'firebase';
import { reset } from 'redux-form';
import {
  SAVE_REVIEW,
  HANDLE_PAYMENT
} from './types';

export * from './JournalActions';

export const saveMessage = ({ name, email, content }) => {
  return (dispatch) => {
    alert('Thank you for reaching out! I\'ll be in touch soon!');
    firebase.database().ref('/messages')
      .push({ name, email, content })
      .then(() => {
        dispatch(reset('ContactForm'), );
      });
  };
};

export const saveReview = ({ name, website, content }, history) => {
  return (dispatch) => {
    alert('Thank you for your review!');
    history.push('/');
    firebase.database().ref('/reviews')
      .push({ name, website, content })
      .then(() => {
        dispatch({ type: SAVE_REVIEW });
      });
  };
};

export const handlePayment = (token, amount) => {
  return dispatch => {
    alert('Thank you for your donation!');
    firebase.database().ref('/donations')
      .push({ amount, token })
      .then(() => {
        dispatch({ type: HANDLE_PAYMENT });
      });
  };
};
