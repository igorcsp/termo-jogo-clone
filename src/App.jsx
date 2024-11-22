import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DropdownMenu from "./components/DropDownMenu";
import Termo from "./pages/Termo";
import Dueto from "./pages/Dueto";
import Quarteto from "./pages/Quarteto";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <DropdownMenu />
      <Routes>
        <Route path="/" element={<Termo />} />
        <Route path="/2" element={<Dueto />} />
        <Route path="/4" element={<Quarteto />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
      <p>LOREM IPSUM</p>
    </Router>
  );
}

export default App;
