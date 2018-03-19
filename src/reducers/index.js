import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import JournalReducer from './JournalReducer';

export default combineReducers({
  form: formReducer,
  journals: JournalReducer
});
