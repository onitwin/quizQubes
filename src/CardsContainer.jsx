import { Card } from "./Card";
import data from "./assets/questions.json";
export const CardsContainer = () => {
  // console.log("Logging Data :", data);
  const questionSet = data[0].questionSet;
  console.log("Question Set:", questionSet);

  const questionMap = questionSet.map((q) => {
    return <Card text={q.question} key={q.pairId} />;
  });

  const answerMap = questionSet.map((a) => {
    return <Card text={a.answer} key={parseInt(a.pairId) * 10} />;
  });

  const combinedCards = [...answerMap, ...questionMap];

  return <main className="cardsWrapper">{combinedCards}</main>;
};
