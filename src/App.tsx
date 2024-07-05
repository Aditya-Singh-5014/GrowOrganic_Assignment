import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

const App: React.FC = () => {
  console.log("App component loaded"); // Debugging log

  return (
    <Router>
      <Routes>
        <Route path="/GrowOrganic_Assignment" element={<Home />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
