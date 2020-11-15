import React from 'react';
import Button from '../Button';

const Buttons = () => {
  const lat = 36.3037417;
  const lng = 126.9021366;
  const name =
    '%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EB%B6%80%EC%97%AC';

  const handleTmap = () => {
    const tmapLink = 'apis.openapi.sk.com/tmap/app/routes';
    const SK_APP_KEY = 'l7xxfa5ddd936bf64ba18f0045ebb581f705';
    const link = `https://${tmapLink}?appKey=${SK_APP_KEY}&name=롯데리조트&lon=${lng}&lat=${lat}`;

    window.open(link, '_blank');
  };

  const handleKakao = () => {
    const kakaoLink = 'map.kakao.com/';
    const link = `https://${kakaoLink}?from=roughmap&eName=${name}&eX=477713.0&eY=779430.0`;

    window.open(link, '_blank');
  };

  const handleNaver = () => {
    const app_link = 'wedding.sungjung.dev';
    const link = `nmap://navigation?dlat=${lat}&dlng=${lng}&dname=${name}&appname=${app_link}`;

    window.open(link, '_blank');
  };

  return (
    <div>
      <Button onClick={handleTmap} label="티맵" />
      <Button onClick={handleKakao} label="카카오" />
      <Button onClick={handleNaver} label="네이버" />
      <style jsx>{`
        display: flex;
      `}</style>
    </div>
  );
};

export default Buttons;
