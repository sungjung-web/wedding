import React, { FC } from 'react';
import useClient from 'src/hooks/useClient';

interface SectionProps {
  heightRatio?: number;
}

const Section: FC<SectionProps> = ({ heightRatio = 1, children }) => {
  const client = useClient({ heightRatio });

  return (
    <section>
      {children}
      <style jsx>{`
        min-height: ${client.height};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}</style>
    </section>
  );
};

export default Section;
