import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

// Create context
export const Context = createContext(initialState);

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGINSTART":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "LOGINSUCC":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGINFAILED":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

// Context provider
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
