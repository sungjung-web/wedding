import { NextPage } from 'next';
import React from 'react';
import Buttons from 'src/components/Album/Buttons';
import Snap from 'src/components/Album/Snap';
import Page from 'src/components/Page';

const albumOrder = [1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1];

const Studio: NextPage = () => {
  return (
    <Page padding="1rem">
      <Buttons
        next="/snap/outside"
        prev="/snap/date"
        nextLabel="야외스냅"
        prevLabel="일상사진"
      />
      {albumOrder.map((count, i) => (
        <Snap
          id={i}
          count={count}
          path={'/images/album/studio'}
          key={`snap-image-${i}`}
        />
      ))}
    </Page>
  );
};

export default Studio;
