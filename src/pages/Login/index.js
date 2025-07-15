import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import React from 'react';

import { Title } from './styled';
import GlobalStyle, { Container } from '../../styles/global.styles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    toast.success('oi');
    e.preventDefault();
    console.log('Button clicked');
    dispatch(exampleActions.clickedButton());
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
