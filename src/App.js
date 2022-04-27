import React, { useEffect } from "react";
import useAnimated from "./useAnimated";
import "./App.css";
import { Navbar, Brand, CTA } from "./components";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, } from "./containers";

function App() {
  useAnimated()
  return (
    <div className="App">
      <div className="gradient__bg revealOp">
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Blog />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
