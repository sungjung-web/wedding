import React from 'react';
import Image from 'next/image';
import useDarkmode from 'src/hooks/useDarkmode';

const BottomImage = () => {
  const isDarkMode = useDarkmode();

  return (
    <div>
      {isDarkMode && (
        <Image
          src="/images/detail/dark-bottom.jpeg"
          alt="detail-main-image"
          quality={50}
          loading="eager"
          unsized
        />
      )}
      {!isDarkMode && (
        <Image
          src="/images/detail/light-bottom.jpg"
          alt="detail-main-image"
          quality={50}
          loading="eager"
          unsized
        />
      )}
    </div>
  );
};

export default BottomImage;
