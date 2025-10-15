import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import PortfolioSection from "./pages/PortfolioSection";
import ServicesSection from "./pages/ServicesSection";
import ContactSection from "./pages/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<PortfolioSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
