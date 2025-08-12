import styled from 'styled-components';

export const StudentContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;

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
