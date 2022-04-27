import { useState } from "react";
import Announcement from "../components/Annoucement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Login from "./Login";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <h2 className="styles">Different You, Different Styles</h2>
      <Categories />
      <h2 className="TopSelling">Top Selling Items</h2>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
