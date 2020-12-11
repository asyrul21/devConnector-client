import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

// sample error state
// {
//     id: 1,
//     msg: "Please log in",
//     alertType: "success",
// },

// package - uuid

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  // remove the error after a certain amount of time
  // actions are executed upon call to dispatch
  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, timeout);
};
