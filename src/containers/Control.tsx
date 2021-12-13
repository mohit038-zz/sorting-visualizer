import React from "react";
import { bubbleSort } from "../Algorithm/bubbleSort";
import { useBubbleSort } from "../contexts/BubbleSortContext";
import { useControl } from "../contexts/ControlContext";

interface ControlProps {}

export const Control: React.FC<ControlProps> = () => {
  const { state, dispatch } = useBubbleSort();
  const { state: controlState, dispatch: controlDispatch } = useControl();
  const { size, delay } = controlState;
  const { running } = state;
  const sort = () => {
    const convertSpeed = 100 * delay;
    dispatch({ type: "setRunning", payload: true });
    bubbleSort(state.array, dispatch, convertSpeed);
  };
  const onSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setCurrentSorted",
      payload: [],
    });
    controlDispatch({ type: "changeSize", payload: parseInt(e.target.value) });
  };
  const onDelayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    controlDispatch({ type: "changeDelay", payload: parseInt(e.target.value) });
  };
  return (
    <div className="control">
      <button
        className="control-button button"
        onClick={sort}
        disabled={running}
      >
        Sort
      </button>
      <div className="control-slider">
        <label className="control-slider-label">Size</label>
        <input
          disabled={running}
          type="range"
          title="size"
          className="control-slider-button"
          min="10"
          max="25"
          name="size"
          value={size}
          step={1}
          onChange={onSizeChange}
        />
        <label className="control-slider-label">{size}</label>
      </div>
      <div className="control-slider">
        <label className="control-slider-label">Delay</label>
        <input
          disabled={running}
          type="range"
          title="delay"
          className="control-slider-button"
          min="1"
          max="9"
          name="speed"
          value={delay}
          step={1}
          onChange={onDelayChange}
        />
        <label className="control-slider-label">{delay}</label>
      </div>
    </div>
  );
};
