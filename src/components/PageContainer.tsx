import { PropsWithChildren } from 'react';
import { StyledPageContainer, ContentContainer } from './PageContainer.styles';

function PageContainer(props: PropsWithChildren) {
  return (
    <StyledPageContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </StyledPageContainer>
  );
}

export default PageContainer;
