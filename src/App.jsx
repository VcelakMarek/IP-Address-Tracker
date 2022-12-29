import { createRoot } from "react-dom/client";
import IpAddressTracker from "./IpAddressTracker";

const App = () => {
  return <IpAddressTracker />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
