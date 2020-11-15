import React from 'react';
import useClient from 'src/hooks/useClient';
import Section from '../Section';
import Buttons from './Buttons';
import Kakao from './Kakao';

const NavigationSection = () => {
  const heightRatio = 0.8;
  const client = useClient({ heightRatio });

  return (
    <Section heightRatio={heightRatio}>
      <h2>오시는 길</h2>
      <Kakao />
      <Buttons />
      <div className="wrapper">
        <h3>1. 전세버스</h3>
        <h3>☞ 서울 방면</h3>
        <p>8:30 고속터미널역 8-1, 8-2 출구 사이</p>
        <p>9:30 부천시민회관</p>
        <p>11:50 부여 롯데리조트 도착</p>
        <h3>☞ 경남 방면</h3>
        <p>10:00 창녕 영산면사무소 앞</p>
        <p>12:10 부여 롯데리조트 도착</p>
        <h3>2. 시외버스</h3>
        <p>{'서울남부터미널 > 부여시외버스터미널'}</p>
      </div>
      <style jsx>{`
        .wrapper {
          min-height: ${client.height};
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.5rem;
        }
        h3 {
          text-align: center;
          margin: 1rem 0;
          font-size: 1.3rem;
        }
        span {
          font-size: 1rem;
        }
      `}</style>
    </Section>
  );
};

export default NavigationSection;
