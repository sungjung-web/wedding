import Image from 'next/image';
import React from 'react';
import Section from '../Section';
import ThumbnailButton from './ThumbnailButton';

const AlbumSection = () => {
  const thumbnails = ['first', 'second', 'third'];

  return (
    <Section>
      <div className="wrapper">
        {thumbnails.map((key) => (
          <div className={`thumbnail ${key}`} key={`thumbnail-${key}`}>
            <Image
              src={`/images/album/thumbnail/${key}.jpeg`}
              alt={key}
              quality={100}
              unsized
            />
          </div>
        ))}
        <ThumbnailButton />
      </div>
      <style jsx>{`
        div.wrapper {
          padding: 2rem;
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas:
            'first first'
            'third .'
            'second second';
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
