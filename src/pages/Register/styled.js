import styled from 'styled-components';

import * as colors from '../../config/colors.config';

export const Title = styled.h1`
  small {
    font-size: 3rem;
  }
  //color: ${(props) => (props.isRed ? 'red' : 'blue')};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
