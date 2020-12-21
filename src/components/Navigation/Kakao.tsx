import React, { useEffect } from 'react';

declare var daum: any;

const Kakao = () => {
  useEffect(() => {
    new daum.roughmap.Lander({
      timestamp: '1605435833038',
      key: '22xho',
      level: 4,
    }).render();
  }, []);

  return (
    <div
      id="daumRoughmapContainer1605435833038"
      className="root_daum_roughmap root_daum_roughmap_landing"
    >
      <style jsx>{`
        width: 100% !important;
        padding: 1rem 0 0;
      `}</style>
    </div>
  );
};

export default Kakao;
