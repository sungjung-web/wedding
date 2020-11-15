const Wrapper = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}</style>
    </div>
  );
};

export default Wrapper;
