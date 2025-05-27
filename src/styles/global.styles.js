import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryColorDarkBg } from '../config/colors.config';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background: ${primaryColorDarkBg};
}
html, body , #root{
  height: 100%;
}

button{
  cursor: pointer;
  background: ${primaryColor};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a{
  text-decoration: none;
  color: ${primaryColor};
}

ul{
  list-style: none;
}
`;

export const Container = styled.section`
  max-width: 40%;
  background-color: white;
  margin: auto;
`;
