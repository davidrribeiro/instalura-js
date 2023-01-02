import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: ${theme.spacings.xsmall};
    padding: 0 ${theme.spacings.small} 0;
  `}
`;
export const Logo = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
`;
export const Links = styled.div`
  ${({ theme }) => css`
    padding: 0;
    margin: 0;
    order: 3;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.xsmall};
    border-top: 1px solid #88989E;
    border-bottom: 1px solid #88989E;
    padding: ${theme.spacings.xxsmall};

    a{
      text-align: center;
      text-decoration: none;
      color: #88989E;
      transition: 200ms ease-in-out;
      &:hover,
      &:focus {
        font-weight: 500,
        color: #070C0E;
      }
    }

  
  `}
`;
export const CTA = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
`;
