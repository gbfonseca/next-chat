import styled, { css, keyframes } from 'styled-components';

interface IMessage {
  side: 'left' | 'right';
}

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

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.main`
  display: flex;
`;

export const Chat = styled.div`
  flex: 1;
  margin: 48px;
  background: #fafbff;
  margin-left: 320px;
  border-radius: 5px;
  animation: ${appearFromLeft} 1s;
  padding: 0 60px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(112, 124, 151, 0.15);
  box-shadow: 5px 5px 15px 5px rgba(112, 124, 151, 0.15);

  @media (max-width: 720.9px) {
    margin: 0;
    padding: 8px 16px;
  }
`;

export const HeaderChat = styled.div`
  width: 100%;
  height: 111px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;

  div {
    display: flex;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.font.sizes.large};
      }

      h6 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.font.sizes.small};
        font-weight: 600;
        letter-spacing: 0.5px;
        line-height: 19px;
      }
    }

    div + div {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 720.9px) {
    div {
      img {
        width: 48px;
        height: 48px;
      }

      div {
        font-size: ${({ theme }) => theme.font.sizes.medium};
      }
    }
  }
`;

export const HeaderIconView = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 5px 5px 15px 5px rgba(112, 124, 151, 0.15);
  box-shadow: 5px 5px 15px 5px rgba(112, 124, 151, 0.15);
  margin-right: 10px;

  @media (max-width: 720.9px) {
    width: 42px;
    height: 42px;
    margin-right: 0px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 640px;
  padding: 24px 0;
`;

export const Message = styled.div<IMessage>`
  width: auto;
  max-width: 65%;
  margin-bottom: 20px;
  padding: 16px;

  ${(props) =>
    props.side === 'left'
      ? css`
          border-top-right-radius: 10px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          background: linear-gradient(
            90deg,
            rgba(124, 184, 247, 1) 0%,
            rgba(42, 139, 242, 1) 100%
          );
          box-shadow: 10px 10px 25px rgba(112, 124, 151, 0.05),
            15px 15px 35px rgba(112, 124, 151, 0.05);
          color: ${({ theme }) => theme.colors.white};
          margin-right: 50%;
        `
      : css`
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          box-shadow: 10px 10px 25px rgba(112, 124, 151, 0.05),
            15px 15px 35px rgba(112, 124, 151, 0.05);
          border: 1px solid rgba(112, 124, 151, 0.25);
          background: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.lightGray};
          margin-left: 50%;
        `};
`;

export const MessageBox = styled.div`
  width: 100%;
  height: 90px;
  border-top: 1px solid #e2e2e2;
  padding: 16px 8px;
  display: flex;
  align-items: center;
`;

export const IconView = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(124, 184, 247, 1) 0%,
    rgba(42, 139, 242, 1) 100%
  );
`;

export const IconGroup = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-bottom: 175px;

  animation: ${appearFromBottom} 1s;

  div {
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  border: none;
  margin-left: 15px;
  flex: 1;
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: 720.9px) {
    font-size: ${({ theme }) => theme.font.sizes.normal};
  }
`;
