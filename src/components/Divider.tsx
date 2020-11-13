import React from 'react';

const Divider = () => {
  return (
    <div>
      <style jsx>{`
        border-radius: 1rem;
        background-color: #999;
        width: 2rem;
        height: 2rem;
        margin: 2rem auto;
        transform: rotate3d(3, -2, 1, 55deg);
      `}</style>
    </div>
  );
};

export default Divider;
