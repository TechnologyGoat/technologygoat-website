import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from  "./components/Navbar/Navbar";
import Home from  "./routes/Home/Home";
import Blueberries from "./routes/Blueberries/Blueberries";
import Unknown from "./routes/Unknown/Unknown";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blueberries" element={<Blueberries />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default memo(App);
