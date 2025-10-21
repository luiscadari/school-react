import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { Container } from '../../styles/global.styles';
import axios from '../../config/axios.config';
import history from '../../services/history';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from "../../store/modules/auth/actions";

export default function Register() {
  const id = useSelector((state) => state.auth.user.id);
  const dispatch = useDispatch();
  const nameStored = useSelector((state) => state.auth.user.name);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;
    setName(nameStored);
    setEmail(emailStored);
  }, [nameStored, emailStored, id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = [];
    if (name.length < 3 || name.length > 255)
      errors.push('O nome deve ter entre 3 à 255 caracteres');
    if (!id && (password.length < 6 || password.length > 50))
      errors.push('A senha deve ter entre 6 à 50 caracteres');
    if (!isEmail(email)) errors.push('Insira um e-mail válido');
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }
    dispatch(actions.registerRequest({ name, email, password, id }));
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
          <button type="submit">{id ? 'Atualizar' : 'Registrar'}</button>
        </Form>
      </Container>
    </>
  );
}
