import React from 'react';
import useDarkmode from 'src/hooks/useDarkmode';
import useClient from 'src/hooks/useClient';
import Section from '../Section';
import BgDark from './BgDark';
import BgLight from './BgLight';
import Content from './Content';

const MainSection = () => {
  const isDarkMode = useDarkmode();
  const client = useClient();
  return (
    <Section>
      <div>
        {!isDarkMode && <BgLight />}
        <Content />
        {isDarkMode && <BgDark />}
      </div>
      <style jsx>{`
        div {
          height: ${client.height};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </Section>
  );
};

export default MainSection;
