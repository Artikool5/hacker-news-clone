import { Container, Index, Skeleton, SkeletonSubText, SkeletonText } from './SkeletonLoader.styles';

interface SkeletonLoaderProps {
  hasIndex?: boolean;
}

function SkeletonLoader({ hasIndex }: SkeletonLoaderProps) {
  const length = Array<boolean>(100).fill(false);
  return (
    <>
      {length.map((_, i) => {
        return (
          <Container key={i}>
            {hasIndex && <Index>{i + 1}</Index>}
            <Skeleton>
              <SkeletonText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit debitis inventore!
              </SkeletonText>
              <SkeletonSubText>Lorem ipsum dolor sit amet consectetur adipisicing!</SkeletonSubText>
            </Skeleton>
          </Container>
        );
      })}
    </>
  );
}

export default SkeletonLoader;
