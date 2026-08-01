export const Card = ({ answerText }) => {
  return (
    <div className="cardContainer">
      <div className="front"></div>
      <div className="back">
        <h2>{answerText}</h2>
      </div>
    </div>
  );
};
