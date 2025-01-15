import { HomePage } from "./Pages/HomePage";
import "./App.css";
import { Context } from "./Context/GlobalContext";

function App() {
  return (
    <>
      <Context>
        <HomePage />
      </Context>
    </>
  );
}

export default App;
