import { FC } from 'react';
import useClient from 'src/hooks/useClient';

const Wrapper: FC = ({ children }) => {
  const client = useClient({ heightRatio: 0.3 });
  return (
    <div>
      {children}
      <style jsx>{`
        min-height: ${client.height};
        padding: 2rem;
        display: flex;
        flex-direction: column;
      `}</style>
    </div>
  );
};

export default Wrapper;
