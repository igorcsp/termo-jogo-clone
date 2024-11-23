import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Termo from "./pages/Termo";
import Dueto from "./pages/Dueto";
import Quarteto from "./pages/Quarteto";
import About from "./pages/About";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Termo />} />
          <Route path="/2" element={<Dueto />} />
          <Route path="/4" element={<Quarteto />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
