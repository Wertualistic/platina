import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Uzb from "./Pages/Uzb";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jahon from "./Pages/Jahon";
import Jamiyat from "./Pages/Jamiyat";
import Tahlil from "./Pages/Tahlil";
import Sport from "./Pages/Sport";
import Media from "./Pages/Media";
import LatestNews from "./Pages/LatestNews";
import Card from "./Pages/Card";
import './components/css.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/uzb" element={<Uzb />} />
      <Route path="/jahon" element={<Jahon />} />
      <Route path="/jamiyat" element={<Jamiyat />} />
      <Route path="/tahlil" element={<Tahlil />} />
      <Route path='/sport' element={<Sport />} />
      <Route path='/media' element={<Media />} />
      <Route path='/latestNews' element={<LatestNews />} />
      <Route path='/card/:id' element={<Card />} />
    </Routes>
    <Footer />
  </Router>
);
