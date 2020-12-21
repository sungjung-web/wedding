import { useRouter } from 'next/router';
import React from 'react';
import Button from '../Button';

const Detail = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        label="🎈 가볼만한 장소"
        onClick={() => router.push('/recommend/places')}
      />
      <Button
        label="🍳 맛-있는 곳"
        onClick={() => router.push('/recommend/foods')}
      />
      <style jsx>{`
        padding: 2rem;
        display: flex;
      `}</style>
    </div>
  );
};

export default Detail;
