import { NextPage } from 'next';
import React from 'react';

const Outside: NextPage = () => {
  return (
    <main className="page">
      <style jsx>{`
        .page {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
};

export default Outside;
