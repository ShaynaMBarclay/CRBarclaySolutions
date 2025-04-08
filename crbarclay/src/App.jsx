import React from 'react'
import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
    <div className = "page-container">
      <Routes>
      <Route path= "/" element={<HomePage />} />
      </Routes>
    </div>
    </>
  );
}

export default App;