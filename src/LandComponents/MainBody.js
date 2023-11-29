import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./MainBody.css";
import Steps from "./Steps";
import Features from "./Features";

const MainBody = () => {


  return (
    <>
      <div className="Main-Container">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Steps />
      </div>
    </>
  );
};

export default MainBody;
