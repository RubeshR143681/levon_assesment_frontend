import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TrafficLight from "./components/TrafficLight";
import { TrafficLightProvider } from "./context/TrafficLightContext";

const App = () => {
  return (
    <TrafficLightProvider>
      <div className="App min-h-screen">
        <TrafficLight />
        <ToastContainer />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
