import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FaHome,
  FaRegistered,
  FaSignInAlt,
  FaUserAlt,
  FaBackward,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(actions.loginFailure({}));
    history.push('/');
  };
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="/register">
        <FaRegistered size={24} />
      </Link>
      <Link to="/student">
        <FaUserAlt size={24} />
      </Link>
      <Link onClick={logout}>
        <FaBackward size={24} />
      </Link>
    </Nav>
  );
}
