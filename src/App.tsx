import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../app/layout";
import About from "../templates/about";
import HomePage from "./templates/home";

function ClientRouter() {
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
