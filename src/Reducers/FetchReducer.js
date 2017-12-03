import * as constants from "../constants";

const initialState = {
  isLoading: false,
  error: false,
  data: []
};

export default function fetchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case constants.USERS_ARE_FETCHING:
      return {
        ...initialState,
        isLoading: true,
        error: false,
        data: []
      }
    case constants.USERS_FETCHED:
      return {
        ...initialState,
        data: payload,
        isLoading: false
      }
      //TODO: error yap.
    default:
      return state;
  }
}
