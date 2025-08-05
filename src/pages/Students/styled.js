import styled from 'styled-components';

export const Title = styled.h1`
  small {
    font-size: 3rem;
  }
  //color: ${(props) => (props.isRed ? 'red' : 'blue')};
`;

export const ProfilePicture = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
