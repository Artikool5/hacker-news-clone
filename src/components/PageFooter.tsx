import React from 'react';
import styled from 'styled-components';

const navItems = [
  { id: 1, name: 'Guidelines', url: 'newsguidelines' },
  { id: 2, name: 'FAQ', url: 'newsfaq' },
  { id: 3, name: 'Lists', url: 'lists' },
  { id: 4, name: 'API', url: 'api' },
  { id: 5, name: 'Security', url: 'security' },
  { id: 6, name: 'Legal', url: 'legal' },
  { id: 7, name: 'Apply to YC', url: 'apply' },
  { id: 8, name: 'Contact', url: 'mailto:hn@ycombinator.com' },
];

const StyledPageFooter = styled.footer`
  display: flex;
  justify-content: center;

  padding-block: 16px;
  padding-inline: 8px;

  background-color: #f6f6ef;
  border-top: 3px solid #ff6600;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Navigation = styled.nav`
  font-size: 12px;
`;

const NavigationList = styled.ul`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  & > div {
    display: flex;
    gap: 4px;
  }
`;

const NavigationItem = styled.li``;

const Link = styled.a`
  &:visited {
    color: inherit;
  }
`;

const Separetor = styled.span`
  color: #828282;
`;

const Search = styled.form`
  display: flex;
  justify-content: center;
`;

const SearchLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  color: #828282;
  flex-grow: 1;
  @media (min-width: 768px) {
    flex-grow: 0;
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  @media (min-width: 768px) {
    flex-grow: 0;
  }
`;

function PageFooter() {
  return (
    <StyledPageFooter>
      <FooterContent>
        <Navigation>
          <NavigationList>
            {navItems.map((link, i, thisArr) => {
              return (
                <div key={link.id}>
                  <NavigationItem>
                    <Link href={link.url}>{link.name}</Link>
                  </NavigationItem>
                  {thisArr[i + 1] ? <Separetor>|</Separetor> : null}
                </div>
              );
            })}
          </NavigationList>
        </Navigation>
        <Search method="GET" action="">
          <SearchLabel>
            Search: <SearchInput type="text" name="search" />
          </SearchLabel>
        </Search>
      </FooterContent>
    </StyledPageFooter>
  );
}

export default PageFooter;
