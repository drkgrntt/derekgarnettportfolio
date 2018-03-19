import {
  FETCH_JOURNAL_ENTRY,
  FETCH_JOURNAL_ENTRIES,
  UNFETCH_JOURNAL_ENTRY,
  CHECK_ACCESS_FIELD
} from '../actions/types';

const INITIAL_STATE = {
  access: '',
  selectedJournal: undefined,
  selectedUid: '',
  entries: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOURNAL_ENTRIES:
      return { ...state, entries: action.payload };
    case FETCH_JOURNAL_ENTRY:
      return { ...state, selectedJournal: action.payload[0], selectedUid: action.payload[1] };
    case UNFETCH_JOURNAL_ENTRY:
      return { ...state, selectedJournal: undefined, selectedUid: '' };
    case CHECK_ACCESS_FIELD:
      return { ...state, access: action.payload }
    default:
      return state;
  }
};
