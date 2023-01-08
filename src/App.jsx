import { useState } from "react";
import { createRoot } from "react-dom/client";
import IpAddressTracker from "./IpAddressTracker";
import coordinatesContext from "./coordinates.context";

const App = () => {
  const coordinates = useState(coordinatesContext);
  return (
    <>
      <coordinatesContext.Provider value={coordinates}>
        <IpAddressTracker />
      </coordinatesContext.Provider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
