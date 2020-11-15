import React from 'react';
import Section from '../Section';
import Title from '../Title';
import PersonInfo from './PersonInfo';
import Wrapper from './Wrapper';

const ContactSection = () => {
  const groom = [
    { name: '신랑 조성정', contact: '01068617712' },
    { name: '아버지 조삼연', contact: '01088397712' },
    { name: '어머니 심섭순', contact: '01024382212' },
  ];
  const bride = [
    { name: '신부 조유나', contact: '01090065243' },
    { name: '아버지 조해화', contact: '01035518893' },
    { name: '어머니 조명순', contact: '01041180789' },
  ];

  return (
    <Section heightRatio={0.3}>
      <Title>연락처</Title>
      <Wrapper>
        <div>
          {groom.map((item) => (
            <PersonInfo key={item.contact} {...item} />
          ))}
        </div>
        <div>
          {bride.map((item) => (
            <PersonInfo key={item.contact} {...item} />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default ContactSection;
