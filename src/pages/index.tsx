import { NextPage } from 'next';
import React from 'react';
import AlbumSection from 'src/components/Album';
import ContactSection from 'src/components/Contact';
import DetailSection from 'src/components/Detail';
import Divider from 'src/components/Divider';
import MainSection from 'src/components/Main';

const Home: NextPage = () => {
  return (
    <main className="page">
      <MainSection />
      <Divider />
      <DetailSection />
      <Divider />
      <ContactSection />
      <Divider />
      <AlbumSection />
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

export default Home;
