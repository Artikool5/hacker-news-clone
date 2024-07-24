import { StyledPageFooter, FooterContent, Search, SearchLabel, SearchInput } from './PageFooter.styles';
import { Navigation, NavigationList, NavigationItem, Separetor, Link } from './PageHeader.styles';

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
