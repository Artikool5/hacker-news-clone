import styled from 'styled-components';

const navItems = [
  { id: 1, name: 'new', url: 'newest' },
  { id: 2, name: 'past', url: 'front' },
  { id: 3, name: 'comments', url: 'newcomments' },
  { id: 4, name: 'ask', url: 'ask' },
  { id: 5, name: 'show', url: 'show' },
  { id: 6, name: 'jobs', url: 'jobs' },
  { id: 7, name: 'submit', url: 'submit' },
];

const StyledPageHeader = styled.header`
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

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.img`
  width: 18px;
  height: 18px;

  border: 1px solid #ffffff;
`;

const Link = styled.a`
  &:visited {
    color: inherit;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
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

const NavigationItem = styled.li`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Separetor = styled.span``;

const Title = styled.h1`
  font-size: inherit;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

function PageHeader() {
  return (
    <StyledPageHeader>
      <HeaderContainer>
        <Link href="/">
          <Logo src="https://news.ycombinator.com/y18.svg" alt="" />
        </Link>
        <Navigation>
          <Title>
            <Link href="news">Hacker News</Link>
          </Title>
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
      </HeaderContainer>
      <HeaderContainer>
        <Link href="login">login</Link>
      </HeaderContainer>
    </StyledPageHeader>
  );
}

export default PageHeader;
