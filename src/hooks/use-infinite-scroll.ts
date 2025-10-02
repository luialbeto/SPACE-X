import { useInView } from 'react-intersection-observer';

export function useInfiniteScroll() {
  return useInView({ threshold: 0 });
}