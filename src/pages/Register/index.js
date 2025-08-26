import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { Container } from '../../styles/global.styles';
import axios from '../../config/axios.config';
import history from '../../services/history';
import { Form } from './styled';
import Loading from '../../components/Loading';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    const errors = [];
    if (name.length < 3 || name.length > 255)
      errors.push('O nome deve ter entre 3 à 255 caracteres');
    if (password.length < 6 || password.length > 50)
      errors.push('A senha deve ter entre 6 à 50 caracteres');
    if (!isEmail(email)) errors.push('Insira um e-mail válido');
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }
    try {
      await axios.post('/users', {
        name,
        password,
        email,
      });
      setIsLoading(false);
      toast.success('Cadastro realizado com sucesso!');
      history.push('/login');
    } catch (e) {
      setIsLoading(false);
      const errors = get(e, 'response.data.errors', []);
      if (errors.length > 0) errors.forEach((e) => toast.error(e));
      console.log(e);
    }
  }
  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <h1>Crie sua conta</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="José"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@teste.com"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira sua senha"
            />
          </label>
          <button type="submit">Registrar</button>
        </Form>
      </Container>
    </>
  );
}
