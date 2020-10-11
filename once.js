function once(callback) {
  let hasBeenRun = false;
  let firstReturnedValue;
  return callBackArg => {
    if (!hasBeenRun) {
      firstReturnedValue = callback(callBackArg);
      hasBeenRun = true;
    }
    return firstReturnedValue;
  };
}
