import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./templates/home";
import Layout from "./app/layout";
import About from "./templates/about";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
