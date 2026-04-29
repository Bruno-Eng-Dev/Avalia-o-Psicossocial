import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;