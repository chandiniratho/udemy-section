import React from "react";
import Companies from "./components/Companies";
import Testimonials from "./components/Testimonials";
import "./assets/styles.css";

function App() {
  return (
    <div className="app-container">
      <Companies />
      <Testimonials />
    </div>
  );
}

export default App;
