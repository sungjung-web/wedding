import { NextPage } from 'next';
import React from 'react';
import Buttons from 'src/components/Album/Buttons';
import Snap from 'src/components/Album/Snap';
import Page from 'src/components/Page';

const albumOrder = [1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1];

const Date: NextPage = () => {
  return (
    <Page padding="1rem">
      <Buttons
        next="/snap/studio"
        prev="/snap/outside"
        nextLabel="웨딩사진"
        prevLabel="야외사진"
      />
      {albumOrder.map((count, i) => (
        <Snap
          id={i}
          count={count}
          path={'/images/album/date'}
          key={`snap-image-${i}`}
        />
      ))}
    </Page>
  );
};

export default Date;
