import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 290px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 14.0351px 0px 25px rgba(86, 128, 248, 0.03),
    35.0877px 0px 70px rgba(86, 128, 248, 0.05),
    23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02);

  padding: 32px 0;
`;

export const User = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 15px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.large};
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  width: 100%;
`;
export const Item = styled.li`
  list-style: none;
  width: 100%;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightGray};
  //text-transform: uppercase;
  line-height: 19px;
  letter-spacing: 0.8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 40px;

  margin-bottom: 30px;

  svg {
    margin-right: 15px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    border-left: 4px solid;
    border-left-color: ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
  }
`;
