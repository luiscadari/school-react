import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/global.styles';
import GlobalStyle from '../../styles/global.styles';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    toast.success('oi');
    e.preventDefault();
    console.log('Button clicked');
    dispatch({ type: 'TESTE_BOTAO', payload: { message: 'Hello from Login' } });
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>
          Login
          <small>Olá</small>
          <a>teste</a>
        </Title>
        <p>Aute fugiat minim dolore sint magna in.</p>
        <button onClick={handleClick} type="button">
          Enviar
        </button>
      </Container>
    </>
  );
}
