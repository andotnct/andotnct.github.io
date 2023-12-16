import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Game from "./components/Game";
import Header from "./components/Header";
import Purokiso from "./components/Purokiso";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/andotyping" element={<Game />} />
        <Route path="/purokiso" element={<Purokiso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;