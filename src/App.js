import Home from "./pages/Home";
import Error from "./pages/Error";
import Guias from "./pages/Guias";
import Galeria from "./pages/Galeria";
import FichaMV from "./pages/FichaKami";
import ProyectoDiscord from "./pages/ProyectoDiscord"
import Reproductor from "./pages/Reproductor"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Guias" element={<Guias />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/FichaMV" element={<FichaMV />} />
          <Route path="/" element={<ProyectoDiscord />} />
          <Route path="/Reproductor" element={<Reproductor />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
