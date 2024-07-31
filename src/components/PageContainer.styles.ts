import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  display: flex;
  justify-content: center;

  padding-block: 0;
  padding-inline: 0;

  @media (min-width: 768px) {
    padding-block: 8px;
    padding-inline: 8px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;
