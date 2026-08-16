export const Card = ({ text, handleClick }) => {
  return (
    <div className="cardContainer" onClick={() => handleClick()}>
      <div className="front"></div>
      <div className="back">
        <h2>{text}</h2>
      </div>
    </div>
  );
};
