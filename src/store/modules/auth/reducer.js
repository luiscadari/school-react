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
      const newState = { ...state };
      // Forma como eu pensei que fica mais limpa;
      Object.keys(newState).forEach((key) => {
        newState[key] = action.payload[key];
      });
      if (!newState.isLoggedIn) newState.isLoggedIn = true;
      return newState;
      // Forma como o professor passou na aula
      /*
      newState.isLoggedIn = true;
      newState.token = action.token;
      newState.user = action.user;
      return state;
      */
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      return state;
    }
    default: {
      return state;
    }
  }
};
export default reducer;
