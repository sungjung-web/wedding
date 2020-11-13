import React from 'react';
import Section from '../Section';
import Image from 'next/image';
import useDarkmode from 'src/hooks/useDarkmode';
import Link from 'next/link';

const AlbumSection = () => {
  const isDarkMode = useDarkmode();
  const buttonColor = isDarkMode ? 'white' : 'black';
  const hoverColor = isDarkMode ? 'rgb(255 255 255 / 20%)' : 'rgb(0 0 0 / 20%)';
  const thumbnails = ['first', 'second', 'third'];

  return (
    <Section heightRatio={1}>
      <div className="wrapper">
        {thumbnails.map((thumbnail) => (
          <div className={thumbnail} key={`thumbnail-${thumbnail}`}>
            <Image
              src={`/images/thumbnail/${thumbnail}.jpeg`}
              alt={thumbnail}
              quality={30}
              loading="eager"
              unsized
            />
          </div>
        ))}
        <div className="button-wrapper">
          <Link href="/snap/wedding/">
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
        </div>
      </div>
      <style jsx>{`
        div.wrapper {
          padding: 1rem;
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas:
            'first first'
            'third .'
            'second second';
        }
        div.button-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          gap: 10px;
          padding-bottom: 4px;
        }
        div.button-wrapper > button {
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
        div.first {
          grid-area: first;
        }
        div.second {
          grid-area: second;
        }
        div.third {
          grid-area: third;
        }
      `}</style>
    </Section>
  );
};

export default AlbumSection;
