import React, { FC } from 'react';
import useClient from 'src/hooks/useClient';

interface SectionProps {
  heightRatio?: number;
  useHeightRatio?: boolean;
}

const Section: FC<SectionProps> = ({
  useHeightRatio = false,
  heightRatio = 1,
  children,
}) => {
  const client = useClient({ heightRatio });

  return (
    <section>
      {children}
      <style jsx>{`
        ${useHeightRatio ? `min-height: ${client.height}` : ''};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      `}</style>
    </section>
  );
};

export default Section;
