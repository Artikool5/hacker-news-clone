import styled from 'styled-components';

export const StyledPageFooter = styled.footer`
  display: flex;
  justify-content: center;

  padding-block: 16px;
  padding-inline: 8px;

  background-color: #f6f6ef;
  border-top: 3px solid #ff6600;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Navigation = styled.nav`
  font-size: 12px;
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

export const NavigationItem = styled.li``;

export const Link = styled.a`
  &:visited {
    color: inherit;
  }
`;

export const Separetor = styled.span`
  color: #828282;
`;

export const Search = styled.form`
  display: flex;
  justify-content: center;
`;

export const SearchLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  color: #828282;
  flex-grow: 1;
  @media (min-width: 768px) {
    flex-grow: 0;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  @media (min-width: 768px) {
    flex-grow: 0;
  }
`;
