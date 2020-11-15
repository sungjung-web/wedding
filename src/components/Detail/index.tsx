import React from 'react';
import Section from '../Section';
import BottomImage from './BottomImage';
import Family from './Family';
import Message from './Message';
import Wrapper from './Wrapper';

const DetailSection = () => {
  const heightRatio = 0.8;

  return (
    <Section heightRatio={heightRatio}>
      <Wrapper>
        <Message />
        <Family />
        <BottomImage />
      </Wrapper>
    </Section>
  );
};

export default DetailSection;
