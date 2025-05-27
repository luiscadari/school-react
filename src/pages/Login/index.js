import { Title } from './styled';
import { Container } from '../../styles/global.styles';
import GlobalStyle from '../../styles/global.styles';

export default function Login() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>
          Login
          <small>Olá</small>
          <a>teste</a>
        </Title>
        <p>Aute fugiat minim dolore sint magna in.</p>
        <button type="button">Enviar</button>
      </Container>
    </>
  );
}
