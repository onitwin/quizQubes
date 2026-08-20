import { useState, useRef } from "react";
import { Card } from "./Card";
import { shuffle } from "fast-shuffle";
import data from "./assets/questions.json";
export const CardsContainer = () => {
  const submittedAnswers = useRef([]);

  const handleClick = (e) => {
    document.querySelector("#" + e).classList.toggle("flipped");
    submittedAnswers.current = [...submittedAnswers.current, e];
    if (submittedAnswers.current.length === 2) {
      if (
        submittedAnswers.current[0].at(-1) ===
        submittedAnswers.current[1].at(-1)
      ) {
        submittedAnswers.current = [];
      } else if (
        submittedAnswers.current.length === 2 &&
        submittedAnswers.current[0].at(-1) !==
          submittedAnswers.current[1].at(-1)
      ) {
        console.log("FAILURE");
        const timeoutSet = setTimeout(() => {
          document
            .querySelector("#" + submittedAnswers.current[0])
            .classList.toggle("flipped");
          document
            .querySelector("#" + submittedAnswers.current[1])
            .classList.toggle("flipped");
          submittedAnswers.current = [];
        }, 1500);
      }
    }
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
