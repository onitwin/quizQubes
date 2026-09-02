import { useState, useRef } from "react";
import { Card } from "./Card";
import { shuffle } from "fast-shuffle";
import data from "./assets/questions.json";
export const CardsContainer = () => {
  const submittedAnswers = useRef([]);

  const [attempts, setAttempts] = useState(0);

  const handleClick = (e) => {
    document.querySelector("#" + e).classList.toggle("flipped");
    submittedAnswers.current = [...submittedAnswers.current, e];
    if (submittedAnswers.current.length === 2) {
      if (
        submittedAnswers.current[0].at(-1) ===
        submittedAnswers.current[1].at(-1)
      ) {
        document
          .querySelector("#" + submittedAnswers.current[0] + " .back")
          .classList.toggle("success");
        document
          .querySelector("#" + submittedAnswers.current[1] + " .back")
          .classList.toggle("success");
        setAttempts((prev) => prev + 1);
        submittedAnswers.current = [];
      } else if (
        submittedAnswers.current.length === 2 &&
        submittedAnswers.current[0].at(-1) !==
          submittedAnswers.current[1].at(-1)
      ) {
        setAttempts((prev) => prev + 1);
        setTimeout(() => {
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

  const [questionSet, setQuestionSet] = useState(data[10].questionSet);

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

  combinedCards = shuffle(combinedCards);

  return (
    <>
      <h2>{data[10].description}</h2>
      <main className="cardsWrapper">{combinedCards}</main>
      <h2>Attempts:{attempts}</h2>
    </>
  );
};
