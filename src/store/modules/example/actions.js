import * as types from '../types';

export function clickedButton() {
  return {
    type: types.TESTE_BOTAO,
    payload: { message: 'Hello from Login' },
  };
}
