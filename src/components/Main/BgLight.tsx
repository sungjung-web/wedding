import Image from 'next/image';
import React from 'react';

const BgLight = () => {
  return (
    <div className="wrapper">
      <Image
        src="/images/bg-light-bottom.jpg"
        alt="main-background-image"
        quality={100}
        loading="eager"
        unsized
      />
      <style jsx>{`
        .wrapper {
          min-height: 50%;
          max-height: 70%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          flex-shrink: 0;
          width: 100%;
          max-width: 700px;
        }
      `}</style>
    </div>
  );
};

export default BgLight;
