import Image from 'next/image';
import React from 'react';

const BgDark = () => {
  return (
    <div className="wrapper">
      <Image
        src="/images/bg-black-bottom.jpeg"
        alt="main-background-image"
        quality={100}
        loading="eager"
        unsized
      />
      <div className={`dim`} />
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column-reverse;
          flex-shrink: 0;
          min-height: 50%;
          max-height: 70%;
          overflow: hidden;
          width: 100%;
          max-width: 700px;
        }
        .dim {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BgDark;
