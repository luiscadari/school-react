import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

export default function Loafing({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>Loading...</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.PropTypes = {
  isLoading: PropTypes.bool,
};
