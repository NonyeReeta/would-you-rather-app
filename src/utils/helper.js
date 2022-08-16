export function formatQuestion(question) {
  const { id, author, optionOne, optionTwo, timestamp } = question;
  return {
    id,
    author,
    text: `Would you rather "${question.optionOne.text}" or "${question.optionTwo.text}"?`,
    optionOne,
    optionTwo,
    timestamp,
  };
}
export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}
