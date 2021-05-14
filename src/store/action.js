import axios from "axios";

export const getQuestions = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
      );
      console.log(response);
      const { data } = response;
      dispatch({ type: "SET_QUESTIONS", payload: data.results });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const setAnswers = (answers) => {
  return async function (dispatch) {
    dispatch({ type: "SET_ANSWERS", payload: answers });
  };
};
