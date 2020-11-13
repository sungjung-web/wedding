import { useEffect, useState } from 'react';

const useDarkmode = (callback: () => void = null) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    matchMedia.onchange = (matchMedia) => {
      callback && callback();
      setDarkMode(matchMedia.matches);
    };

    setDarkMode(matchMedia.matches);
    return () => (matchMedia.onchange = null);
  }, []);

  return isDarkMode;
};

export default useDarkmode;
