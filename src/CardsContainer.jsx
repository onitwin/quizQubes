import { useState, useRef, useEffect } from "react";
import { Card } from "./Card";
import { shuffle } from "fast-shuffle";
import data from "./assets/questions.json";
import { ReusableModal } from "./ReusableModal";
import { updateClasses } from "./helperFunctions/handlers";
import { FooterContainer } from "./FooterContainer";
import { fetchQuestionsAndQuestionSetByDate } from "./helperFunctions/fetches";

export const CardsContainer = () => {
  const submittedAnswers = useRef([]);
  const [attempts, setAttempts] = useState(0);
  const [questionSet, setQuestionSet] = useState(data[12].questionSet);
  const [description, setDescription] = useState("Loading game....");
  const [title, setTitle] = useState("Loading Title..");

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

  useEffect(() => {
    const unixDate = Date.now(); // fine here, effects aren't part of render
    (async () => {
      const result = await fetchQuestionsAndQuestionSetByDate(unixDate);
      console.log(result);
      setTitle(result.title);
      setDescription(result.description);
      setQuestionSet(result.Questions);
    })();
  }, []);

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

  //concatenate both questions and answers
  let combinedCards = [...answerMap, ...questionMap];

  //shuffle questions and answers. comment out this code for testing logic
  combinedCards = shuffle(combinedCards);

  //UI element rendering - modal is attached to 'body' as parent
  return (
    <>
      <ReusableModal text={description} title={title} />
      <main className="cardsWrapper">{combinedCards}</main>
      <h2 className="attemptsDisplay">Attempts:{attempts}</h2>
      <FooterContainer />
    </>
  );
};
