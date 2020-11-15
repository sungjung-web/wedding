const Wrapper = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      display: flex;
      margin: 2rem 1rem 0;
      justify-content: space-around;
    `}</style>
  </div>
);

export default Wrapper;
