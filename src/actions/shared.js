import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// const AUTHED_ID = "sarahedo";
let AUTHED_ID = "";

const getInitialData = async () => {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {
    users,
    questions,
  };
};
export function getAuthedUser(user) {
  console.log(user);
  AUTHED_ID = user;
  // return async (dispatch) => {
  //   dispatch(showLoading());
  //   dispatch(setAuthedUser(user));
  //   dispatch(hideLoading());
  // };
}
export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  };
}
