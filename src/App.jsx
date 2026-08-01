import { TitleBar } from "./TitleBar";
import "./App.css";
import { CardsContainer } from "./CardsContainer";
function App() {
  return (
    <div>
      <TitleBar />
      <div className="outer-wrapper">
        <CardsContainer />
      </div>
    </div>
  );
}

export default App;
