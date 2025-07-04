import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/signUp/SignUp";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import ProductPage from "./landing_page/products/ProductPage";
import Nabvar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Nabvar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
);
