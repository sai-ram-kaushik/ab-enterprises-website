import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./ui/Navbar";
import HomePage from "./ui/HomePage";
import data from "./data/landing-page.json";
import Footer from "./ui/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage homePage={data.homePage} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
