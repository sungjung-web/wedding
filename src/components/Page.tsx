import { FC } from 'react';

interface PageProps {
  padding?: string;
}

const Page: FC<PageProps> = ({ padding = '0', children }) => (
  <main>
    {children}
    <style jsx>{`
      width: 100%;
      margin: 0 auto;
      padding: ${padding};
      max-width: 500px;
      position: relative;
    `}</style>
  </main>
);

export default Page;
