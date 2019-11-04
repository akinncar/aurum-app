import {produce} from 'immer';

const initialState = {
  files: [],
};

export default function files(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@files/UPLOAD_FILE_SUCCESS': {
        draft.files.find(f => f.id === action.payload.id) &&
          draft.files.splice(action.payload, 1);
        draft.files.push(action.payload);
        break;
      }
      case '@files/REMOVE_FILE': {
        console.tron.log('red', draft.files.find(f => f.id === action.payload));
        const file =
          draft.files.find(f => f.id === action.payload) &&
          draft.files.splice(file, 1);
        break;
      }
      default:
    }
  });
}
