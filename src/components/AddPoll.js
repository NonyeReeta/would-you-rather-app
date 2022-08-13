import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
class AddPoll extends Component {
  state = {
    text1: "",
    text2: "",
    toHome: false,
  };
  handleChange1 = (e) => {
    const text1 = e.target.value;
    this.setState(() => ({
      text1,
    }));
  };
  handleChange2 = (e) => {
    const text2 = e.target.value;
    this.setState(() => ({
      text2,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { text1, text2 } = this.state;
    const { dispatch, authedUser } = this.props;
    console.log(text1, text2, authedUser);
    dispatch(
      handleAddQuestion({
        author: authedUser,
        optionOneText: text1,
        optionTwoText: text2,
      })
    );
    this.setState(() => ({
      text1: "",
      text2: "",
      toHome: true,
    }));
  };
  render() {
    const { text1, text2, toHome } = this.state;
    if (toHome === true) {
      return <Navigate to="/" />;
    }
    if (!this.props.authedUser) {
      return (
        <div>
          <h4>Please login</h4>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">
          <button className="close-question">Close</button>
        </Link>
        <div className="new-poll">
          <h3>Add a new poll</h3>
          <div>
            <h6>Would you rather</h6>
            <form onSubmit={this.handleSubmit}>
              <textarea
                placeholder="Option One"
                maxLength={180}
                className="textarea"
                value={text1}
                onChange={this.handleChange1}
              ></textarea>
              <p>or</p>
              <textarea
                placeholder="Option Two"
                maxLength={180}
                className="textarea"
                value={text2}
                onChange={this.handleChange2}
              ></textarea>
              <p></p>
              <button
                className="button"
                type="submit"
                disabled={!text1 || !text2}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(AddPoll);
