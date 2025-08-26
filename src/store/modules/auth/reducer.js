import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('Action request:', action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
};
export default reducer;
