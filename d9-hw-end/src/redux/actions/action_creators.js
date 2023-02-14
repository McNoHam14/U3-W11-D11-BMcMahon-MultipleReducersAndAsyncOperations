import {
  REMOVE_FROM_FAVOURITE,
  ADD_TO_FAVOURITE,
  STORE_JOBS,
} from "./action_types";

export const removeFromFavourites = (payload) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: payload,
  };
};

export const addToFavourites = (payload) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: payload,
  };
};

export const fetchJobs = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(storeJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const storeJobs = (payload) => {
  return {
    type: STORE_JOBS,
    payload: payload,
  };
};
