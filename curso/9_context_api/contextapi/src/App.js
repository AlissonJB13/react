import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Epis from "./pages/Epis";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>E-SEC</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/epis" element={<Epis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
