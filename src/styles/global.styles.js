import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors.config';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  background: ${colors.primaryColorDarkBg};
}


html, body , #root{
  height: 100%;
}

button{
  cursor: pointer;
  background: ${colors.primaryColor};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a{
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul{
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background: ${colors.successColor};
}
`;

export const Container = styled.section`
  max-width: 40%;
  background-color: white;
  margin: auto;
`;
