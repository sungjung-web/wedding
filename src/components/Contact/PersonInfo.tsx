const PersonInfo = ({ name, contact }) => {
  const phone = `tel:${contact}`;
  const sms = `sms:${contact}`;

  return (
    <div className="wrapper">
      <p>{name}</p>
      <div className="contact">
        <a href={phone}>📞</a>
        <a href={sms}>✉️</a>
      </div>
      <style jsx>{`
        div.wrapper {
          text-align: center;
        }
        p {
          font-size: 1.3rem;
          margin: 2rem 0 1rem;
        }
        div.contact > a {
          font-size: 1.5rem;
          margin: 0 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default PersonInfo;
