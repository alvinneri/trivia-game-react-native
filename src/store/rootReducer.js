import { combineReducers } from "redux";

import publicReducer from "./publicReducer";

const rootReducer = (state, action) => {
  const allReducers = combineReducers({
    public: publicReducer,
  });

  return allReducers(state, action);
};

export default rootReducer;
