import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css"; // Import the styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {

  return (
    <>
        <Router>

      <AppRoutes />
      </Router>
    </>
  );
}

export default App;
