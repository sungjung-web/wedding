import { useRouter } from 'next/router';
import React, { FC } from 'react';
import useDarkmode from 'src/hooks/useDarkmode';
import Page from './Page';

interface SubPageProps {
  title: string;
}

const SubPage: FC<SubPageProps> = ({ title, children }) => {
  const router = useRouter();
  const isDarkMode = useDarkmode();

  return (
    <Page>
      <div>
        <div>
          <span onClick={() => router.back()}>X</span>
          <h1>{title}</h1>
          <style jsx>{`
            div {
              position: fixed;
              top: 0;
              height: 50px;
              width: 100%;
              max-width: 500px;
              display: flex;
              justify-content: center;
              align-items: center;
              background: ${isDarkMode ? 'black' : 'white'};
              box-shadow: 0 2px 0 0 ${isDarkMode ? 'white' : 'black'};
            }
            span {
              position: absolute;
              left: 20px;
              top: 50%;
              font-size: 1.5rem;
              transform: translateY(-50%);
              cursor: pointer;
            }
            h1 {
              font-size: 1.5rem;
              font-weight: normal;
            }
          `}</style>
        </div>
        <div>
          {children}
          <style jsx>{`
            div {
              position: fixed;
              top: 52px;
              bottom: 0;
              width: 100%;
              max-width: 500px;
              overflow: scroll;
            }
          `}</style>
        </div>
      </div>
    </Page>
  );
};

export default SubPage;
