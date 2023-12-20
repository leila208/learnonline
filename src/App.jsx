import "./App.css";
import "./Responsive.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { useEffect } from "react";
function App() {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [loc.pathname]);
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
