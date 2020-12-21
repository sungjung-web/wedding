import React, { FC } from 'react';
import useDarkmode from 'src/hooks/useDarkmode';
import LinkButton from './LinkButton';

interface PlaceItemProps {
  data: {
    title: string;
    location: string;
    time: string;
    contact?: string;
    link: string;
  };
}

const Buttons = ({ contact, link }) => (
  <div>
    <LinkButton label="🔮 정보보기" href={`https://${link}`} />
    <LinkButton label="📞 전화하기" href={`tel:${contact}`} />
    <style jsx>{`
      margin-top: 1rem;
      display: flex;
    `}</style>
  </div>
);

const Title = ({ children }) => (
  <h2>
    {children}
    <style jsx>{`
      font-size: 1.5rem;
      font-weight: normal;
      margin-bottom: 1rem;
    `}</style>
  </h2>
);

const PlaceItem: FC<PlaceItemProps> = ({ data }) => {
  const { title, location, time, contact, link } = data;
  const isDarkMode = useDarkmode();

  return (
    <li>
      <Title>{title}</Title>
      <p>{location}</p>
      <p>{time}</p>
      <Buttons contact={contact} link={link} />
      <style jsx>{`
        li {
          padding: 1.5rem;
          background: ${isDarkMode ? 'black' : 'white'};
          border-bottom: solid 1px ${isDarkMode ? 'white' : 'black'};
        }
        p {
          margin: 0.5rem 0;
        }
      `}</style>
    </li>
  );
};

export default PlaceItem;
