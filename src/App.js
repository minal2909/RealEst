import React, { useState } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./GlobalStyle";
import SliderData from "./Data/SliderData";
import DropDown from "./Components/DropDown";
import InfoSection from "./Components/InfoSection";
import { InfoData, InfoDataTwo } from "./Data/InfoData";
import { FooterContainer } from "./Container/Footer";

function App() {
  const [isOpen, setISOpen] = useState(false);

  const toggle = () => {
    setISOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <FooterContainer />
    </>
  );
}

export default App;
