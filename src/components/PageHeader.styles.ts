import styled from 'styled-components';

export const StyledPageHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding-block: 2px;
  padding-inline: 2px 6px;

  background-color: #ff6600;

  font-size: 14px;
  line-height: 12px;

  @media (max-width: 768px) {
    padding-block: 6px;
    padding-inline: 2px 10px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled.img`
  width: 18px;
  height: 18px;

  border: 1px solid #ffffff;
`;

export const Link = styled.a`
  &:visited {
    color: inherit;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  & > div {
    display: flex;
    gap: 4px;
  }
`;

export const NavigationItem = styled.li`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Separetor = styled.span``;

export const Title = styled.h1`
  font-size: inherit;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
