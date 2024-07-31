import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Index = styled.div`
  min-width: 2ch;
  text-align: end;
  color: #828282;
`;

export const Skeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 16px;
`;

export const SkeletonText = styled.div<{ $height: number; $width: number }>`
  background-color: #828282;
  color: transparent;
  cursor: default;

  width: ${({ $width }) => `${$width}ch`};
  height: ${({ $height }) => `${$height}px`};

  animation: loading 1s linear infinite alternate;
  @keyframes loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const SkeletonSubText = styled(SkeletonText)`
  font-size: 10px;
`;
