import React from 'react';
import Section from '../Section';
import BottomImage from './BottomImage';
import Wrapper from './Wrapper';

const DetailSection = () => {
  const heightRatio = 0.8;

  return (
    <Section heightRatio={heightRatio}>
      <Wrapper>
        <p>
          각 계절을 지내보며 알아가보라는 할머니의 말을 들은지 3년이 지나갑니다.
          같이 사계절을 지내보니 서로가 서로의 삶의 원동력이자 기쁨이라는 것을
          알았습니다. 저희 두 사람 믿음과 사람으로 아껴주는 부부가 되고자
          합니다. 즐거운 마음으로 이 날을 함께하고 싶습니다. 오셔서 지켜봐주시고
          축하해 주십시오. 귀한 걸음 하시어 축복해주시면 감사하겠습니다.
        </p>
        <div>
          <h3>
            조삼연 𐤟 심섭순 <span>의 장남</span> 성정
          </h3>
          <h3>
            조해화 𐤟 조명순 <span>의 장녀</span> 유나
          </h3>
        </div>
        {/* <BottomImage /> */}
      </Wrapper>
      <style jsx>{`
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

export default DetailSection;
