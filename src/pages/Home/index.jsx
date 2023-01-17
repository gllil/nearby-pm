import React from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pricing from "../../components/Pricing";
import TitleSection from "../../components/TitleSection";

const Home = () => {
  return (
    <div>
      <Header />
      <TitleSection />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
