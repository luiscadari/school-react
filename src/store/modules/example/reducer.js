import * as types from '../types';

const initialState = {
  message: 'Hello, World!',
  button: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BUTTON_CLICK_REQUEST: {
      console.log('Action request:', action);
      return state;
    }
    case types.BUTTON_CLICK_SUCCESS: {
      console.log('Action success:', action);
      return state;
    }
    case types.BUTTON_CLICK_FAILURE: {
      console.error('Action failure:', action);
      return state;
    }
    default: {
      return state;
    }
  }
};
export default reducer;
