import { useState } from "react";
import { Card } from "./Card";
import { shuffle } from "fast-shuffle";
import data from "./assets/questions.json";
export const CardsContainer = () => {
  // console.log("Logging Data :", data);

  const handleClick = (e) => {
    document.querySelector("#" + e).classList.toggle("flipped");
  };

  const [questionSet, setQuestionSet] = useState(data[0].questionSet);

  console.log("The questions array :", questionSet);

  const questionMap = questionSet.map((q) => {
    return (
      <Card
        text={q.question}
        key={q.pairId}
        id={"questionCard" + q.pairId}
        handleClick={handleClick}
      />
    );
  });

  const answerMap = questionSet.map((a) => {
    return (
      <Card
        text={a.answer}
        key={parseInt(a.pairId) * 10}
        id={"answerCard" + a.pairId}
        handleClick={handleClick}
      />
    );
  });

  let combinedCards = [...answerMap, ...questionMap];

  //combinedCards = shuffle(combinedCards);

  return <main className="cardsWrapper">{combinedCards}</main>;
};
