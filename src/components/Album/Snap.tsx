import { FC } from 'react';
import Image from 'next/image';

interface SnapProps {
  id: number;
  count: number;
  path: string;
}

const Snap: FC<SnapProps> = ({ id, count, path }) => {
  if (count === 1) {
    return (
      <div>
        <Image src={`${path}/${id}.jpg`} quality={100} unsized />
      </div>
    );
  }

  return (
    <div>
      <Image src={`${path}/${id}-1.jpg`} quality={100} unsized />
      <Image src={`${path}/${id}-2.jpg`} quality={100} unsized />
      <style jsx>{`
        display: flex;
      `}</style>
    </div>
  );
};

export default Snap;
