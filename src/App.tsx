import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./templates/home";
import Layout from "./app/layout";
import About from "./templates/about";
import Blogs from "./templates/blog";
import Careers from "./templates/careers";
import Contact from "./templates/contact";
import Services from "./templates/services";
import ServiceDetail from "./templates/services/service";
import BlogDetail from "./templates/blog/details";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Main Services Landing Page */}
          <Route path="/services" element={<Services />} />

          {/* Dynamic Service Pages (Web Dev, E-commerce, etc.) */}
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
