import * as constants from "../constants";
import axios from "axios";

function graphIsUpdating() {
  return {
    type: constants.CHART_IS_UPDATING
  };
}

function graphUpdated(data) {
  return {
    type: constants.CHART_UPDATED,
    payload: data
  };
}

function graphFailed(error) {
  return {
    type: constants.CHART_FAILED,
    payload: error
  };
}

export const updateGraphs = users => dispatch => {
  dispatch(graphIsUpdating());
  //data = [1,2,,3] <= user ids.
  if(!users.length){
    //clear data.
    dispatch(graphUpdated([]));
    return false
  }

  axios.get('https://jsonplaceholder.typicode.com/users', {
    params: {
      id: users,
      _embed: 'posts'
    }
  })
    .then(user => {
      dispatch(graphUpdated(user.data));
    })
    .catch(error => {
      dispatch(graphFailed(error));
    });
};
