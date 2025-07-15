import * as types from '../types';

export function clickedButtonRequest() {
  return {
    type: types.BUTTON_CLICK_REQUEST,
    payload: { message: 'Hello from Login' },
  };
}
export function clickedButtonSuccess() {
  return {
    type: types.BUTTON_CLICK_SUCCESS,
    payload: { message: 'Hello from Login' },
  };
}
export function clickedButtonFailure() {
  return {
    type: types.BUTTON_CLICK_FAILURE,
    payload: { message: 'Hello from Login' },
  };
}
