import { NextPage } from 'next';
import React from 'react';
import PlaceItem from 'src/components/PlaceItem';
import SubPage from 'src/components/SubPage';
import places from 'src/data/places';

const Places: NextPage = () => {
  const title = '🎈가볼만한 장소';
  return (
    <SubPage title={title}>
      <ul>
        {places.map((item) => (
          <PlaceItem key={item.title} data={item} />
        ))}
      </ul>
    </SubPage>
  );
};

export default Places;
