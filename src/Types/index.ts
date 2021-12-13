export interface BubbleSortContextState {
  running: boolean;
  array: number[];
  currentSwapper: number[];
  currentSorted: Array<number | boolean>;
  currentBubbleTwo: number[];
}

export interface BubbleSortContextInterface {
  state: BubbleSortContextState;
  dispatch: React.Dispatch<actionType>;
}

export const initialState: BubbleSortContextInterface = {
  state: {
    running: false,
    array: [],
    currentSwapper: [],
    currentSorted: [],
    currentBubbleTwo: [],
  },
  dispatch: () => {},
};

export type actionTypeName =
  | "setRunning"
  | "setArray"
  | "setCurrentSwappers"
  | "setCurrentSorted"
  | "setCurrentBubbleTwo";

export type actionType =
  | { type: "setRunning"; payload: boolean }
  | { type: "setArray"; payload: number[] }
  | { type: "setCurrentSwappers"; payload: number[] }
  | { type: "setCurrentSorted"; payload: number[] }
  | { type: "setCurrentBubbleTwo"; payload: number[] };
