export const Card = ({ text, handleClick, id, key }) => {
  return (
    <div
      className="cardContainer"
      key={key}
      id={id}
      onClick={() => handleClick(id)}
    >
      <div className="front"></div>
      <div className="back">
        <h2>{text}</h2>
      </div>
    </div>
  );
};
