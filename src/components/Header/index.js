import React from 'react';
import { useSelector } from 'react-redux';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
export default function Header() {
  const selector = useSelector((state) => state.selector);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="/user">
        <FaUserAlt size={24} />
      </Link>
      {selector ? 'Clicado' : 'Não Clicado'}
    </Nav>
  );
}
