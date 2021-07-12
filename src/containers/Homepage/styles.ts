import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.main`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  padding: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 320px;

  div {
    max-width: 1280px;
    width: 100%;
    animation: ${appearFromLeft} 1s;
  }

  @media (max-width: 768.9px) {
    padding: 32px 16px;
    margin: 0;
  }
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

  @media (max-width: 768.9px) {
    flex-direction: column;

    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 15px;

      h1 {
        font-size: ${({ theme }) => theme.font.sizes.superLarge};
      }
      h2 {
        font-size: ${({ theme }) => theme.font.sizes.medium};
      }
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  margin-top: 25px;

  padding: 16px;

  > div {
    display: flex;
    align-items: center;
    max-width: 520px;
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
    width: 280px;

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

  @media (max-width: 520.9px) {
    padding: 8px 4px;
    > div {
      max-width: 180px;

      input {
        font-size: ${({ theme }) => theme.font.sizes.normal};
      }
    }
  }

  div + div {
    select {
      font-size: ${({ theme }) => theme.font.sizes.normal};
    }
  }
`;
