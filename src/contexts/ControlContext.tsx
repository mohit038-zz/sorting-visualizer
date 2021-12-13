import React from "react";

interface ControlContextProps {
  children: React.ReactNode;
}

export type ControlContextType =
  | { type: "changeSize"; payload: number }
  | { type: "changeDelay"; payload: number };

const initialState = {
  state: {
    size: 15,
    delay: 5,
  },
  dispatch: () => {},
};
interface ControlContextState {
  size: number;
  delay: number;
}
interface ControlContextInterface {
  state: ControlContextState;
  dispatch: React.Dispatch<ControlContextType>;
}

const controlReducer = (
  state: ControlContextState,
  action: ControlContextType
) => {
  switch (action.type) {
    case "changeSize":
      return { ...state, size: action.payload };
    case "changeDelay":
      return { ...state, delay: action.payload };
    default:
      return state;
  }
};
export const ControlContext =
  React.createContext<ControlContextInterface>(initialState);

export const ControlContextProvider: React.FC<ControlContextProps> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(
    controlReducer,
    initialState.state
  );
  return (
    <ControlContext.Provider value={{ state, dispatch }}>
      {children}
    </ControlContext.Provider>
  );
};

export const useControl = () => {
  const context = React.useContext(ControlContext);
  if (context === undefined) {
    throw new Error("useControl must be used within a ControlProvider");
  }
  return context;
};
