import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  max-width: 780px;
  width: 100%;
  padding: 56px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    h1 {
      font-size: ${({ theme }) => theme.font.sizes.superLarge};
      font-weight: 500;
      letter-spacing: 0.5px;
    }
    h2 {
      font-size: ${({ theme }) => theme.font.sizes.large};
      color: ${({ theme }) => theme.colors.lightGray};
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  margin-top: 25px;

  padding: 16px;

  > div {
    display: flex;
    align-items: center;
    max-width: 420px;
    width: 100%;
    height: 100%;

    svg {
      margin: 0 10px;
    }

    input {
      width: 100%;
      height: 100%;

      border: none;
      color: ${({ theme }) => theme.colors.lightGray};
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }

  div + div {
    border: none;
    border-left: 1px solid #707c97;
    flex: 1;

    select {
      height: 100%;
      width: 100%;
      border: none;
      background: transparent;
      margin: 0 5px;
      padding-left: 15px;
      color: ${({ theme }) => theme.colors.lightGray};
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }
`;
