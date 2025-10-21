import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', { ...payload });
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login efetuado com sucesso!');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    console.error(e);
    toast.error('Usuário ou senha inválidos!');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate(payload) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { name, email, password, id } = payload;
  try {
    yield call(id ? axios.put : axios.post, '/users', {
      email,
      name,
      password,
      id,
    });
    toast.success(
      id ? 'Conta alterada com sucesso!' : 'Conta criada com sucesso!'
    );
    yield put(actions.registerSuccess({ name, email, password }));
  } catch (e) {
    const errors = get(e, 'response.data.error', []);
    //TODO: usuário não logado
    if (errors.length > 0) {
      errors.map((e) => toast.error(e));
    } else {
      toast.error('Internal server error.');
    }
    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
