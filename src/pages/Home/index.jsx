import React, { useState } from "react";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Pricing from "../../components/Pricing";
import TitleSection from "../../components/TitleSection";
import Tabs from "../../components/Tabs";
import Ltr from "../../components/Ltr";

const Home = () => {
  const [view, setView] = useState("str");
  return (
    <div>
      <Header />
      <TitleSection />
      <Tabs view={view} setView={setView} />
      {view === "str" && (
        <>
          <Pricing />
        </>
      )}
      {view === "ltr" && (
        <>
          <Ltr />
        </>
      )}
      <Contact />
    </div>
  );
};

export default Home;
