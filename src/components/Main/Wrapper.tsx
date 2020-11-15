import { FC } from 'react';
import useClient from 'src/hooks/useClient';

const Wrapper: FC = ({ children }) => {
  const client = useClient();
  return (
    <div>
      {children}
      <style jsx>{`
        height: ${client.height};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}</style>
    </div>
  );
};

export default Wrapper;
