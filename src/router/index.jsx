import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Gallery from "../pages/Gallery";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service/:service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}
