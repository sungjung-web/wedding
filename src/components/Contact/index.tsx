import React from 'react';
import Section from '../Section';
import PersonInfo from './PersonInfo';

const ContactSection = () => {
  const heightRatio = 0.5;
  const groom = [
    { name: '신랑 조성정', contact: '01068617712' },
    { name: '아버지 조삼연', contact: '01090065245' },
    { name: '어머니 심섭순', contact: '01090065246' },
  ];
  const bride = [
    { name: '신부 조유나', contact: '01090065243' },
    { name: '아버지 조해화', contact: '01090065242' },
    { name: '어머니 조명순', contact: '01090065241' },
  ];
  return (
    <Section heightRatio={heightRatio}>
      <h2>📟</h2>
      <div className="wrapper">
        <div className="column">
          {groom.map((item) => (
            <PersonInfo key={item.contact} {...item} />
          ))}
        </div>
        <div className="column">
          {bride.map((item) => (
            <PersonInfo key={item.contact} {...item} />
          ))}
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-size: 3rem;
          text-align: center;
          margin: 4rem;
        }
        div.wrapper {
          display: flex;
        }
        div.column {
          width: 100%;
        }
      `}</style>
    </Section>
  );
};

export default ContactSection;
