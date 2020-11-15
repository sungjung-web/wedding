import React from 'react';
import useDarkmode from 'src/hooks/useDarkmode';
import Section from '../Section';
import BgDark from './BgDark';
import BgLight from './BgLight';
import Content from './Content';
import Wrapper from './Wrapper';

const MainSection = () => {
  const isDarkMode = useDarkmode();
  return (
    <Section>
      <Wrapper>
        {!isDarkMode && <BgLight />}
        <Content />
        {isDarkMode && <BgDark />}
      </Wrapper>
    </Section>
  );
};

export default MainSection;
