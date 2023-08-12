import { useState } from "react";
import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

    </Routes>
  );
}

export default App;
