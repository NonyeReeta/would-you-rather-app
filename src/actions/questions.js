import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
const ADD_POLL = "ADD_POLL";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
// add poll action creatoe
function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}
// Add Answer action creator
function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  };
}
export function handleAddAnswer({ authedUser, id, answer }) {
  return async (dispatch) => {
    // const { authedUser } = getState();
    dispatch(showLoading());
    await _saveQuestionAnswer({
      authedUser,
      qid: id,
      answer,
    });
    dispatch(addAnswer(answer));
    return dispatch(hideLoading());
  };
}

export function handleAddQuestion({ author, optionOneText, optionTwoText }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const poll = await _saveQuestion({
      author,
      optionOneText,
      optionTwoText,
    });
    dispatch(addPoll(poll));
    return dispatch(hideLoading());
  };
}
