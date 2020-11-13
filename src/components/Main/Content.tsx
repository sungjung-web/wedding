import React, { FC } from 'react';

const Content: FC = () => {
  return (
    <div className="wrapper">
      <h1>조성정 𐤟 조유나의 결혼식</h1>
      <div>
        <p>충남 부여 롯데리조트 사비홀</p>
        <p>2021.01.23. (토) 낮 12:30</p>
      </div>
      <style jsx>{`
        .wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
        p {
          margin-top: 1rem;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Content;
