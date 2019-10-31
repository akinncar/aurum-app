import {produce} from 'immer';

const initialState = {
  cases: [],
};

export default function cases(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cases/CASES_SUCCESS': {
        draft.cases = action.payload.cases;
        break;
      }
      default:
    }
  });
}
