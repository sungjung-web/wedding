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
        <span onClick={() => router.back()}>X</span>
        <h1>{title}</h1>
        <style jsx>{`
          div {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 50px;
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
            left: 0;
            right: 0;
            bottom: 0;
            overflow: scroll;
          }
        `}</style>
      </div>
    </Page>
  );
};

export default SubPage;
