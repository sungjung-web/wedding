import { useRouter } from 'next/router';
import React, { FC } from 'react';
import useDarkmode from 'src/hooks/useDarkmode';

interface ButtonsProps {
  prev: string;
  next: string;
  prevLabel: string;
  nextLabel: string;
}

const Buttons: FC<ButtonsProps> = ({ prev, next, prevLabel, nextLabel }) => {
  const router = useRouter();
  const isDarkMode = useDarkmode();
  const buttonColor = isDarkMode ? 'white' : 'black';

  return (
    <div>
      <button onClick={() => router.replace(prev)}>{`☜︎ ${prevLabel}`}</button>
      <button onClick={() => router.back()}>{`홈으로`}</button>
      <button onClick={() => router.replace(next)}>{`${nextLabel} ☞`}</button>
      <style jsx>{`
        div {
          display: flex;
          margin-bottom: 1rem;
        }
        button {
          width: 100%;
          cursor: pointer;
          font-size: 1rem;
          height: 4rem;
          background-color: transparent;
          border: 3px outset;
          color: ${buttonColor};
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Buttons;
