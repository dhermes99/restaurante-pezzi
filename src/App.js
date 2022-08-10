import React from "react";
import Footer from "./components/footer";
import Products from "./components/products";
import "./index.css";
import Info from "./info";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
