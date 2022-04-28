import React, { useEffect, useState } from "react";
import useAnimated from "./useAnimated";
import "./App.css";
import { Navbar, Brand, CTA } from "./components";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, } from "./containers";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  useAnimated({ setIsLoaded })
  console.log(isLoaded)
  return (
    <>
      {isLoaded ?
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
        :
        <Loader />}
    </>
  );
}

export default App;
