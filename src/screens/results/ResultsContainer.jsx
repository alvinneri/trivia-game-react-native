import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Results from "./Results";

const ResultsScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const { questions, answers } = useSelector((state) => state.public);

  const getScore = () => {
    let score = 0;
    answers.forEach((answer) => {
      if (answer.isCorrect) {
        score = score + 1;
      }
    });
    setScore(score);
  };

  useEffect(() => {
    getScore();
  }, []);

  return (
    <Results
      questions={questions}
      answers={answers}
      score={score}
      navigation={navigation}
    />
  );
};

export default ResultsScreen;
