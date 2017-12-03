import * as constants from "../constants";
import axios from "axios";

function UserIsFetching() {
  return {
    type: constants.USERS_ARE_FETCHING
  };
}

function UserHasFetched(data) {
  return {
    type: constants.USERS_FETCHED,
    payload: data
  };
}

function UserFetchFailed(error) {
  return {
    type: constants.USERS_FETCH_FAILED,
    payload: error
  };
}

export const fetchUsers = data => dispatch => {
  dispatch(UserIsFetching());
  return new Promise((resolve, reject) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(user => {
        dispatch(UserHasFetched(user.data));
        resolve();
      })
      .catch(error => {
        dispatch(UserFetchFailed(error));
        reject();
      });
  });
};
