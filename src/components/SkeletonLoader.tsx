import { Container, Index, Skeleton, SkeletonText } from './SkeletonLoader.styles';

interface SkeletonLoaderProps {
  hasIndex?: boolean;
  amount: number;
}

function SkeletonLoader({ hasIndex, amount }: SkeletonLoaderProps) {
  const length = Array<boolean>(amount).fill(false);
  return (
    <>
      {length.map((_, i) => {
        return (
          <Container key={i}>
            {hasIndex && <Index>{i + 1}</Index>}
            <Skeleton>
              <SkeletonText $height={16} $width={60} />
              <SkeletonText $height={12} $width={35} />
            </Skeleton>
          </Container>
        );
      })}
    </>
  );
}

export default SkeletonLoader;
