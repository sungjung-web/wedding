import React from 'react';
import Section from '../Section';
import Title from '../Title';
import Address from './Address';
import Bus from './Bus';
import Buttons from './Buttons';
import Kakao from './Kakao';
import Wrapper from './Wrapper';

const NavigationSection = () => {
  return (
    <Section>
      <Wrapper>
        <Title>오시는 길</Title>
        <Address />
        <Kakao />
        <Buttons />
        <Bus />
      </Wrapper>
    </Section>
  );
};

export default NavigationSection;
