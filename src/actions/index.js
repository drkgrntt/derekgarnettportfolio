import firebase from 'firebase';
import { reset } from 'redux-form';

const SAVE_MESSAGE = 'save_message';

export const saveMessage = ({ name, email, content }) => {
  return (dispatch) => {
    alert('Thank you for reaching out! I\'ll be in touch soon!');
    firebase.database().ref('/messages')
      .push({ name, email, content })
      .then(() => {
        dispatch(reset('ContactForm'));
      });
  };
};
