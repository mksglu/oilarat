import * as constants from "../constants";

const initialState = {
  isLoading: false,
  error: false,
  data: []
};

export default function fetchreducer(state = initialState, { type, payload }) {
  switch (type) {
    case constants.CHART_IS_UPDATING:
      return {
        ...initialState,
        isLoading: true,
        error: false,
        data: []
      };
    case constants.CHART_UPDATED:
      return {
        ...initialState,
        data: payload,
        isLoading: false
      };
    default:
      return state;
  }
}
