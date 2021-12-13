import React, { useCallback, useEffect } from "react";
import { useBubbleSort } from "../contexts/BubbleSortContext";
import { useControl } from "../contexts/ControlContext";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { state } = useControl();
  const { state: sortState, dispatch } = useBubbleSort();
  const { size } = state;
  const { running } = sortState;

  const resetArray = useCallback(() => {
    const newArray: number[] = [];
    for (let i = 0; i < size; i++)
      newArray.push(randomIntFromInterval(20, 100));
    dispatch({ type: "setArray", payload: newArray });
  }, [dispatch, size]);

  useEffect(() => {
    resetArray();
  }, [resetArray]);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const onRefreshClicked = () => {
    dispatch({ type: "setCurrentSorted", payload: [] });
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        resetArray();
      }, i * 40);
    }
  };

  return (
    <header className="header">
      <h1 className="header-title">Bubble Sort</h1>
      <button className="button" disabled={running} onClick={onRefreshClicked}>
        Reset
      </button>
    </header>
  );
};
