import Link from 'next/link';
import React from 'react';
import useDarkmode from 'src/hooks/useDarkmode';

const ThumbnailButton = () => {
  const isDarkMode = useDarkmode();
  const buttonColor = isDarkMode ? 'white' : 'black';
  const hoverColor = isDarkMode ? 'rgb(255 255 255 / 20%)' : 'rgb(0 0 0 / 20%)';

  return (
    <div>
      <Link href="/snap/studio/">
        <button>
          <span>☝︎︎</span>
          {'웨딩사진'}
        </button>
      </Link>
      <Link href="/snap/outside/">
        <button>
          <span>☜︎</span>
          {'야외스냅'}
        </button>
      </Link>
      <Link href="/snap/date/">
        <button>
          <span>☟︎</span>
          {'일상사진'}
        </button>
      </Link>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          gap: 10px;
          padding-bottom: 4px;
        }
        div > button {
          cursor: pointer;
          font-size: 1rem;
          height: 100%;
          background-color: transparent;
          border: 3px outset;
          color: ${buttonColor};
          display: flex;
          justify-content: center;
          align-items: center;
        }
        button:active:focus:hover {
          border: 3px outset;
          background-color: ${hoverColor};
        }
        span {
          font-size: 1.3rem;
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default ThumbnailButton;
