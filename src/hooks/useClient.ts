import { useEffect, useState } from 'react';

const useClient = ({ heightRatio = 1 } = {}) => {
  const [width, setWidth] = useState<string>('100vw');
  const [height, setHeight] = useState<string>('100vh');

  useEffect(() => {
    setHeight(`${window.innerHeight * heightRatio}px`);
    setWidth(`${window.innerWidth}px`);
    if (window.innerHeight > 1000) {
      setHeight(`${800}px`);
    }
  }, []);

  return { width, height };
};

export default useClient;
