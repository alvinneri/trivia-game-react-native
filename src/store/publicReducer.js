const initialState = {
  isLoading: false,
  questions: [],
  answers: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case "SET_QUESTIONS": {
      return {
        ...state,
        questions: payload || [],
      };
    }
    case "SET_ANSWERS": {
      return {
        ...state,
        answers: payload || [],
      };
    }
    default:
      return state;
  }
}

export default reducer;
