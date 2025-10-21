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
      newState.isLoading = true;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.REGISTER_SUCCESS: {
      const newState = { ...state };
      newState.user.name = action.payload.name;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }
    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      // Forma como eu pensei que fica mais limpa;
      Object.keys(newState).forEach((key) => {
        newState[key] = action.payload[key];
      });
      if (!newState.isLoggedIn) newState.isLoggedIn = true;
      newState.isLoading = false;
      return newState;
      // Forma como o professor passou na aula
      /*
      newState.isLoggedIn = true;
      newState.token = action.token;
      newState.user = action.user;
      return state;
      */
    }
    default: {
      return state;
    }
  }
};
export default reducer;
