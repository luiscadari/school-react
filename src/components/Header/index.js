import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FaHome,
  FaRegistered,
  FaSignInAlt,
  FaUserAlt,
  FaBackward,
  FaPowerOff,
  FaUserCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const logout = () => {
    dispatch(actions.loginFailure({}));
    history.push('/');
  };
  const login = () => {
    history.push('/login');
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
      {isLoggedIn ? (
        <button onClick={logout} className="button danger">
          <FaPowerOff size={24} color="mauve" />
        </button>
      ) : (
        <button onClick={login} className="button success">
          <FaUserCircle size={24} color="mauve" />
        </button>
      )}
    </Nav>
  );
}
