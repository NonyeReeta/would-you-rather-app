import { _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
// Add question action creator
function addAnswer(answer) {
  return {
    type: ADD_QUESTION,
    answer,
  };
}
export function handleAddAnswer({ authedUser, id, answer }) {
  return async (dispatch) => {
    // const { authedUser } = getState();
    dispatch(showLoading());
    const quesAnswer = await _saveQuestionAnswer({
      authedUser,
      qid: id,
      answer,
    });
    dispatch(addAnswer(answer));
    return dispatch(hideLoading());
  };
}
