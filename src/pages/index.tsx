import { NextPage } from 'next';
import React from 'react';
import AlbumSection from 'src/components/Album';
import ContactSection from 'src/components/Contact';
import DetailSection from 'src/components/Detail';
import Divider from 'src/components/Divider';
import HeartSection from 'src/components/Heart';
import MainSection from 'src/components/Main';
import NavigationSection from 'src/components/Navigation';
import Page from 'src/components/Page';

const Home: NextPage = () => {
  return (
    <Page>
      <MainSection />
      <Divider />
      <DetailSection />
      <Divider />
      <AlbumSection />
      <Divider />
      <ContactSection />
      <Divider />
      <NavigationSection />
      <Divider />
      <HeartSection />
    </Page>
  );
};

export default Home;
