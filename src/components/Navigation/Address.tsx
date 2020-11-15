const Address = () => {
  return (
    <div>
      <p>충청남도 부여군 규암면 백제문로 400</p>
      <p>롯데리조트 1층 사비홀</p>
      <a href="tel:041-939-1000">📞 041-939-1000</a>
      <style jsx>{`
        div {
          margin: 2rem 0 0;
        }
        p {
          line-height: 1.5rem;
        }
        a {
          line-height: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Address;
