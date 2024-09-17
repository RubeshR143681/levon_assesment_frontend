import { useContext, useEffect } from "react";
import { TrafficLightContext } from "../context/TrafficLightContext";
import GreenLight from "./GreenLight";
import YellowLight from "./YellowLight";
import RedLight from "./RedLight";
import PedestrianButton from "./PedestrianButton";
import { toast } from "react-toastify";

const TrafficLight = () => {
  const { state, dispatch } = useContext(TrafficLightContext);

  useEffect(() => {
    let countdownInterval;

    // Countdown interval to reduce countdown every second
    countdownInterval = setInterval(() => {
      if (state.countdown > 0) {
        dispatch({ type: "SET_COUNTDOWN", payload: state.countdown - 1 });
      }
    }, 1000);

    // Handle light transitions when the countdown reaches 0
    if (state.countdown === 0) {
      switch (state.currentLight) {
        case "green":
          dispatch({ type: "CHANGE_LIGHT", payload: "yellow", timer: 3 });
          break;
        case "yellow":
          dispatch({ type: "CHANGE_LIGHT", payload: "red", timer: 7 });
          break;
        case "red":
          if (state.pedestrianRequested) {
            dispatch({ type: "SET_COUNTDOWN", payload: 5 });
            dispatch({ type: "RESET_CROSSING" });
          } else {
            dispatch({ type: "CHANGE_LIGHT", payload: "green", timer: 10 });
          }
          break;
        default:
          break;
      }
    }

    return () => clearInterval(countdownInterval);
  }, [
    state.countdown,
    state.currentLight,
    state.pedestrianRequested,
    dispatch,
  ]);

  const handleEmergencyOverride = () => {
    dispatch({ type: "EMERGENCY_OVERRIDE" });
    toast.info("Emergency vehicle override activated!");
  };

  return (
    <div className="flex flex-col gap-28">
      <h1 className="font-semibold text-center pt-28 text-2xl">
        Traffic Light Simulator
      </h1>
      <div className="flex flex-col justify-start  items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-2 bg-gray-800 h-72 w-28 rounded-2xl">
          <RedLight
            active={state.currentLight === "red"}
            countdown={state.countdown}
          />
          <YellowLight
            active={state.currentLight === "yellow"}
            countdown={state.countdown}
          />
          <GreenLight
            active={state.currentLight === "green"}
            countdown={state.countdown}
          />
        </div>
        <PedestrianButton />
        <button
          onClick={handleEmergencyOverride}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Emergency Vehicle Override
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
