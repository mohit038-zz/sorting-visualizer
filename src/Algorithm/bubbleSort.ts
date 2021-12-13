import { actionType, actionTypeName } from "../Types";

export const bubbleSort = (
  stateArray: number[],
  dispatch: React.Dispatch<actionType>,
  speed: number
) => {
  let array = stateArray.slice(0),
    toDispatch = [],
    sorted = false,
    round = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - round; i++) {
      toDispatch.push([i, i + 1]);
      if (array[i] > array[i + 1]) {
        toDispatch.push([i, i + 1, true]);
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        sorted = false;
        toDispatch.push(array.slice(0));
        toDispatch.push([]);
      }
    }
    toDispatch.push([true, array.length - 1 - round]);
    round++;
  }
  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
};

const handleDispatch = (
  toDispatch: Array<any>,
  dispatch: React.Dispatch<actionType>,
  array: number[],
  speed: number
) => {
  if (!toDispatch.length) {
    dispatch({
      type: "setCurrentBubbleTwo",
      payload: array.map((num, index) => index),
    });
    setTimeout(() => {
      dispatch({ type: "setCurrentBubbleTwo", payload: [] });
      dispatch({
        type: "setCurrentSorted",
        payload: array.map((num, index) => index),
      });
      dispatch({ type: "setRunning", payload: false });
    }, 9);
    return;
  }
  let dispatchFunction: actionTypeName =
    toDispatch[0].length > 3
      ? "setArray"
      : toDispatch[0].length === 3 || toDispatch[0].length === 0
      ? "setCurrentSwappers"
      : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean"
      ? "setCurrentSorted"
      : "setCurrentBubbleTwo";
  dispatch({ type: dispatchFunction, payload: toDispatch.shift() });
  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
};
