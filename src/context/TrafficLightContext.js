import { createContext, useReducer } from "react";

const initialState = {
  currentLight: "green",
  pedestrianRequested: false,
  countdown: 10,
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LIGHT":
      return {
        ...state,
        currentLight: action.payload,
        countdown: action.timer,
      };
    case "REQUEST_CROSSING":
      return { ...state, pedestrianRequested: true };
    case "RESET_CROSSING":
      return { ...state, pedestrianRequested: false };
    case "SET_COUNTDOWN":
      return { ...state, countdown: action.payload };
    case "EMERGENCY_OVERRIDE":
      return {
        ...state,
        currentLight: "green",
        countdown: 10,
        pedestrianRequested: false,
      };
    default:
      return state;
  }
};

export const TrafficLightContext = createContext();

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};
