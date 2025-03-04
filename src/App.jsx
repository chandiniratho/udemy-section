import { HashRouter as Router } from "react-router-dom";
import Companies from "./components/Companies";
import Testimonials from "./components/Testimonials";
import "./assets/styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Companies />
        <Testimonials />
      </div>
    </Router>
  );
}

export default App;
