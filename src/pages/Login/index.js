import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { Container } from '../../styles/global.styles';
import { Form, Title } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const prevPath = get(props, 'location.state.prevPath', '/');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    if (password.length < 6 || password.length > 50)
      errors.push('A senha deve ter entre 6 à 50 caracteres');
    if (!isEmail(email)) errors.push('Insira um e-mail válido');
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };
  return (
    <>
      <Container>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu e-mail"
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insira sua senha"
          ></input>
          <button type="submit">Acessar</button>
        </Form>
      </Container>
    </>
  );
}
