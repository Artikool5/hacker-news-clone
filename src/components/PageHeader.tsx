import {
  StyledPageHeader,
  HeaderContainer,
  Logo,
  Navigation,
  Link,
  Title,
  NavigationList,
  NavigationItem,
  Separetor,
} from './PageHeader.styles';

const navItems = [
  { id: 1, name: 'new', url: 'newest' },
  { id: 2, name: 'past', url: 'front' },
  { id: 3, name: 'comments', url: 'newcomments' },
  { id: 4, name: 'ask', url: 'ask' },
  { id: 5, name: 'show', url: 'show' },
  { id: 6, name: 'jobs', url: 'jobs' },
  { id: 7, name: 'submit', url: 'submit' },
];

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
