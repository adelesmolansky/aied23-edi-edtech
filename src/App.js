import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import Format from "./pages/Format";
import Organizers from "./pages/Organizers";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/callForPapers" element={<CallForPapers />} />
        <Route path="/format" element={<Format />} />
        <Route path="/organizers" element={<Organizers />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
