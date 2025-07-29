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
  font-family: "Roboto", serif;
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

body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background: ${colors.errorColor};
}

`;

export const Container = styled.section`
  max-width: 60%;
  background-color: white;
  margin: 5% auto ;
  padding: 20px;
  height: auto;
  border-radius: 10px;
  h1 {
    text-align: center;
    font-size: 2.5rem;
  }
`;
