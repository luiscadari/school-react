import styled from 'styled-components';

export const Title = styled.h1`
  small {
    font-size: 3rem;
  }
  //color: ${(props) => (props.isRed ? 'red' : 'blue')};
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;

  input{
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    :hover{
      opacity: 80%;
    }
    border: 1px solid #ddd;
  }
`
