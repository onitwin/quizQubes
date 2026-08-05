export const Card = ({ text }) => {
  return (
    <div className="cardContainer">
      <div className="front"></div>
      <div className="back">
        <h2>{text}</h2>
      </div>
    </div>
  );
};
