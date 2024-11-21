import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h1>Products Page (Coming Soon)</h1>} />
        <Route path="/flash-sale" element={<h1>Flash Sale Page (Coming Soon)</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
