import { STORE_JOBS } from "../actions/action_types";

const initialState = {
  jobs: [],
};

const jobReducer = (state = initialState, action) => {
  if (action.type === STORE_JOBS) {
    return {
      jobs: action.payload,
    };
  }
  return state;
};

export default jobReducer;
