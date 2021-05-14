import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswers } from "../../store/action";
import Quiz from "./Quiz";

const QuizScreen = ({ navigation }) => {
  const [questionNo, setQuestionNo] = useState(0);
  const { questions, answers } = useSelector((state) => state.public);
  const dispatch = useDispatch();

  const getAnswer = (answer) => {
    if (questionNo + 1 !== questions.length) {
      setQuestionNo(questionNo + 1);
      let _answers = [...answers];
      let isCorrect =
        answer === questions[questionNo].correct_answer ? true : false;
      _answers[questionNo] = {
        answer: answer,
        correctAnswer: questions[questionNo].correct_answer,
        isCorrect: isCorrect,
      };
      dispatch(setAnswers(_answers));
    } else {
      navigation.navigate("Results");
    }
  };

  return (
    <Quiz
      questionNo={questionNo}
      questions={questions}
      getAnswer={getAnswer}
      navigation={navigation}
    />
  );
};

export default QuizScreen;
