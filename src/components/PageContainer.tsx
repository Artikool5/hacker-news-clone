import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
  display: flex;
  justify-content: center;

  padding-block: 0;
  padding-inline: 0;

  @media (min-width: 768px) {
    padding-block: 8px;
    padding-inline: 8px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

function PageContainer(props: PropsWithChildren) {
  return (
    <StyledPageContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </StyledPageContainer>
  );
}

export default PageContainer;
