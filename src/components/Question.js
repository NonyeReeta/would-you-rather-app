import React from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import NotFound from "./NotFound";

function Question(props) {
  const location = useLocation();
  const qid = useParams().id.substring(1);

  const { questions } = props;
  const question = questions[qid];
  console.log(question);
  if (!question) {
    return <NotFound />;
  }
  const { isAnswered, text, avatar } = location.state;

  return (
    <div className="question-content">
      {isAnswered === false && <UnansweredQuestion avatar={avatar} />}
      {isAnswered === true && <AnsweredQuestion text={text} />}
    </div>
  );
}

function mapStateToProps({ questions }) {
  return { questions };
}
export default connect(mapStateToProps)(Question);
