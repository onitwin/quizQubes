export const Card = ({ text, handleClick, id }) => {
  return (
    <div className="cardContainer" id={id} onClick={() => handleClick(id)}>
      <div className="front"></div>
      <div className="back">
        <h2>{text}</h2>
      </div>
    </div>
  );
};
