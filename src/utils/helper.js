export function formatUnansweredQuestion(unanswered) {
  const { id, author, optionOne, optionTwo, timestamp } = unanswered;
  return {
    id,
    author,
    text: `Would you rather "${unanswered.optionOne.text}" or "${unanswered.optionTwo.text}"?`,
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
