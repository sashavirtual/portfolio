import React, { useEffect, useState } from "react";
import useAnimated from "./useAnimated";
import "./App.css";
import { Navbar } from "./components";
import { Footer, Blog, Grounds, FacingIT, WhoAmI, Header, } from "./containers";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  useAnimated({ setIsLoaded })
  return (
    <div className="App">
      <div className="gradient__bg revealOp">
        <Navbar />
        <Header />
      </div>
      <WhoAmI />
      <FacingIT />
      <Grounds />
      <Blog />
      <Footer />
    </div>

  );
}

export default App;
