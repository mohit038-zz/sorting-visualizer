import React, { createContext, useContext, useReducer } from "react";
import {
  BubbleSortContextState,
  actionType,
  BubbleSortContextInterface,
  initialState,
} from "../Types";

interface bubbleSortContextProviderProps {
  children: React.ReactNode;
}

const sortReducer = (state: BubbleSortContextState, action: actionType) => {
  switch (action.type) {
    case "setRunning":
      return { ...state, running: action.payload };
    case "setArray":
      return { ...state, array: action.payload };
    case "setCurrentSwappers":
      return { ...state, currentSwapper: action.payload };
    case "setCurrentSorted":
      if (action.payload.length > 0) {
        return {
          ...state,
          currentSorted: [...state.currentSorted, ...action.payload],
        };
      } else {
        return { ...state, currentSorted: [] };
      }
    case "setCurrentBubbleTwo":
      return { ...state, currentBubbleTwo: action.payload };
    default:
      return state;
  }
};

const BubbleSortContext =
  createContext<BubbleSortContextInterface>(initialState);

export const BubbleSortContextProvider: React.FC<bubbleSortContextProviderProps> =
  ({ children }) => {
    const [state, dispatch] = useReducer(sortReducer, initialState.state);
    const value = {
      state,
      dispatch,
    };
    return (
      <BubbleSortContext.Provider value={value}>
        {children}
      </BubbleSortContext.Provider>
    );
  };

export const useBubbleSort = () => {
  const context = useContext(BubbleSortContext);
  if (context === undefined) {
    throw new Error(
      "useBubbleSort must be used within a BubbleSortContextProvider"
    );
  }
  return context;
};
