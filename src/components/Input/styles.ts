import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 70px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 12px;
  margin: 10px 0px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.font.sizes.normal};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.black};
  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
