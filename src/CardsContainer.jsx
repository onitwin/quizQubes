import { useState, useRef } from "react";
import { Card } from "./Card";
import { shuffle } from "fast-shuffle";
import data from "./assets/questions.json";
import { ReusableModal } from "./ReusableModal";
import { updateClasses } from "./helperFunctions/handlers";
import { FooterContainer } from "./FooterContainer";

export const CardsContainer = () => {
  //track the values of the clicked elements
  const submittedAnswers = useRef([]);

  //track the number of attempts made (an attempt being two clicks in default logic)
  const [attempts, setAttempts] = useState(0);

  //game logic
  //should be extracted to seperate function to allow other logic models be swopped in and out
  const handleClick = (e) => {
    if (submittedAnswers.current.length <= 1) {
      updateClasses(e, "flipped");
      submittedAnswers.current = [...submittedAnswers.current, e];
      if (submittedAnswers.current.length === 2) {
        if (
          submittedAnswers.current[0].at(-1) ===
          submittedAnswers.current[1].at(-1)
        ) {
          updateClasses(submittedAnswers.current[0] + " .back", "success");
          updateClasses(submittedAnswers.current[1] + " .back", "success");
          setAttempts((prev) => prev + 1);
          submittedAnswers.current = [];
        } else if (
          submittedAnswers.current.length === 2 &&
          submittedAnswers.current[0].at(-1) !==
            submittedAnswers.current[1].at(-1)
        ) {
          setAttempts((prev) => prev + 1);
          setTimeout(() => {
            updateClasses(submittedAnswers.current[0], "flipped");
            updateClasses(submittedAnswers.current[1], "flipped");
            submittedAnswers.current = [];
          }, 1500);
        }
      }
    }
  };

  //holds the complete array. setQuestionSet is not used for now, but will be once API exists.
  const [questionSet, setQuestionSet] = useState(data[4].questionSet);

  //below code loops over questions/answers json and returns only the questions
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

  //below code loops over questions/answers json and returns only the questions
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

  //concatenate both questions and answers
  let combinedCards = [...answerMap, ...questionMap];

  //shuffle questions and answers. comment out this code for testing logic
  combinedCards = shuffle(combinedCards);

  //UI element rendering - modal is attached to 'body' as parent
  return (
    <>
      <ReusableModal text={data[4].description} />
      <main className="cardsWrapper">{combinedCards}</main>
      <h2 className="attemptsDisplay">Attempts:{attempts}</h2>
      <FooterContainer />
    </>
  );
};
