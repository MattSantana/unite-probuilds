import Inicio from "./pages/Inicio/Inicio";
import Aftersearch from "./pages/AfterSearch/Aftersearch";
import Afterclick from "./pages/AfterClick/Afterclick";
import Navigation from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
