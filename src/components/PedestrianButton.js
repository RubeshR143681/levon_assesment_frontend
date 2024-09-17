import { useContext } from "react";
import { TrafficLightContext } from "../context/TrafficLightContext";
import { toast } from "react-toastify";

const PedestrianButton = () => {
  const { dispatch, state } = useContext(TrafficLightContext);

  const handlePedestrianRequest = () => {
    if (!state.pedestrianRequested) {
      dispatch({ type: "REQUEST_CROSSING" });
      toast.info("Pedestrian crossing requested!");
    }
  };

  return (
    <button
      onClick={handlePedestrianRequest}
      className={`px-4 py-2 mt-5 rounded-lg ${
        state.pedestrianRequested ? "bg-gray-400" : "bg-green-500"
      } text-white`}
    >
      {state.pedestrianRequested
        ? "Crossing Requested"
        : "Request Pedestrian Crossing"}
    </button>
  );
};

export default PedestrianButton;
