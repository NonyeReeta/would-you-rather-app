const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action:", action);
  const returnValue = next(action);
  console.log(returnValue);
  console.groupEnd();
  return returnValue;
};

export default logger;
