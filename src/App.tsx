import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        {/* <Route path="/login" element={} />
        <Route path="/register" element={} />
        <Route path="/about" element={} />
        <Route path="*" element={} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
