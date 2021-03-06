import * as React from "react";
import "./Body.module.scss";
import Banner from "../components/Banner";
import Header from "../components/indexBody/Header";
import Workshops from "../components/indexBody/Workshops";
import WhatWeDo from "../components/indexBody/WhatWeDo";
import News from "../components/indexBody/News";

const Body = () => {
  return (
    <>
      <Header />
      <Workshops />
      <WhatWeDo />
      <Banner />
      <News />
    </>
  );
};

export default Body;
