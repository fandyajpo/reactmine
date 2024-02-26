import "./App.css";
import { useContext } from "react";
import { ProfileContext } from "./lib/profileContext";
import EffectComponent from "./components/useEffectTest";
import RefComponent from "./components/useRefTest";
import ConditionalComponent from "./components/ConditionalComponent";
function App() {
  const context = useContext(ProfileContext);

  return (
    <div>
      <ConditionalComponent method="UPDATE" />
      <ConditionalComponent method="CREATE" />
      <EffectComponent />
      <RefComponent />
    </div>
  );
}

export default App;
