import React from 'react';
import Section from '../Section';
import Title from '../Title';
import Detail from './Detail';
import Wrapper from './Wrapper';

const HeartSection = () => {
  return (
    <Section>
      <Wrapper>
        <Title>마음 보낼 곳</Title>
        <Detail />
      </Wrapper>
    </Section>
  );
};

export default HeartSection;
