import { useRouter } from 'next/router';
import { TouchEvent, useState } from 'react';

const useSlider = (prev: string, next: string) => {
  const router = useRouter();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (next && touchStart - touchEnd > 300) {
      router.push(next);
    }

    if (prev && touchEnd - touchStart > 300) {
      router.push(prev);
    }
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
};

export default useSlider;
