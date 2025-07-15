const initialState = {
  message: 'Hello, World!',
  button: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TESTE_BOTAO': {
      console.log('Action received:', action);
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default reducer;
