import React, { useEffect } from 'react';
import Button from '../Button';

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
    <div className="wrapper">
      <div
        id="daumRoughmapContainer1605435833038"
        className="root_daum_roughmap root_daum_roughmap_landing"
      />
      <script
        className="daum_roughmap_loader_script"
        src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
      />
      <style jsx>{`
        div.root_daum_roughmap {
          width: 100%;
          padding: 2rem 2rem 0;
        }
      `}</style>
    </div>
  );
};

export default Kakao;
