import { NextPage } from 'next';
import React from 'react';
import PlaceItem from 'src/components/PlaceItem';
import SubPage from 'src/components/SubPage';
import foods from 'src/data/foods';

const Foods: NextPage = () => {
  const title = '🍳 맛-있는 곳';
  return (
    <SubPage title={title}>
      <ul>
        {foods.map((item) => (
          <PlaceItem key={item.title} data={item} />
        ))}
      </ul>
    </SubPage>
  );
};

export default Foods;
