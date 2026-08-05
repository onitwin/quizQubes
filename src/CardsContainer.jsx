import { Card } from "./Card";
import data from "../public/questions.json";
export const CardsContainer = () => {
  // console.log("Logging Data :", data);
  const questionSet = data[1];
  console.log("Question Set:", questionSet.questionSet);

  return (
    <main className="cardsWrapper">
      <Card text="What is the capital of France?" />
      <Card text="Who is the lead singer of 'Foo Fighters?'" />
      <Card text="Joe Biden" />
      <Card text="What is the top selling book of all time" />
      <Card text="The Bible" />
      <Card textext="Are Whales a fish or a mammal" />
      <Card text="Dave Grohl" />
      <Card text="Who won the 2020 US presidential eleection" />
      <Card text="Las Vegas" />
      <Card text="What is 4x4" />
      <Card text="Rings" />
      <Card text="Paris" />
      <Card text="Complete the film title: 'Leaving " />
      <Card text="Mammal" />
      <Card text="Sonic the Hedgehog collects these" />
      <Card text="16" />
    </main>
  );
};
