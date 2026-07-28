import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Destinations from "./pages/destinations";
import About from "./pages/about";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
