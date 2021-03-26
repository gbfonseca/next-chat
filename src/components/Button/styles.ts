import styled from 'styled-components';

export const Container = styled.button`
  background: linear-gradient(
    90deg,
    rgba(124, 184, 247, 1) 0%,
    rgba(42, 139, 242, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.large};
  line-height: 23.6px;
  max-width: 320px;
  width: 100%;
  height: 60px;
  border-radius: 6px;

  > svg {
    margin-right: 5px;
  }
`;
