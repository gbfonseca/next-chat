import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthBox = styled.section`
  max-width: 520px;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 10px 10px 5px -7px rgba(218, 218, 218, 1);
  -moz-box-shadow: 10px 10px 5px -7px rgba(218, 218, 218, 1);
  box-shadow: 10px 10px 5px -7px rgba(218, 218, 218, 1);
  border-radius: 10px;
`;

export const Title = styled.h1`
  margin: 15px 0;
`;

export const Form = styled.form`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;
