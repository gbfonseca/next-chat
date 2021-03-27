import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  height: 220px;
  margin: 15px 0;
  padding: 32px;
  border-radius: 6px;
  -webkit-box-shadow: 10px 10px 5px -7px rgba(218, 218, 218, 1);
  -moz-box-shadow: 10px 10px 5px -7px rgba(218, 218, 218, 1);
  box-shadow: 10px 10px 5px -7px rgba(218, 218, 218, 1);
  cursor: pointer;

  @media (max-width: 520px) {
    height: auto;
    padding: 16px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 54px;
    height: 54px;
  }

  div {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    div {
      h1 {
        font-size: ${({ theme }) => theme.font.sizes.large};
        letter-spacing: 0.8px;
      }

      h2 {
        font-size: ${({ theme }) => theme.font.sizes.normal};
        color: ${({ theme }) => theme.colors.primary};
        margin-top: 5px;
      }
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.font.sizes.normal};
    color: ${({ theme }) => theme.colors.lightGray};
    width: 180px;
  }

  @media (max-width: 520px) {
    div {
      width: auto;

      div {
        h1 {
          font-size: ${({ theme }) => theme.font.sizes.medium};
        }
        h2 {
          font-size: ${({ theme }) => theme.font.sizes.small};
        }
      }
    }

    h3 {
      font-size: ${({ theme }) => theme.font.sizes.small};
    }
  }
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.lightGray};
  max-width: 920px;
  margin: 20px 0;
`;
