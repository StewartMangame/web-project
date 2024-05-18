import React from "react";
import ImageBanner from "./imagebarner";
import Marketlist from "./marketlist";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="bg-[rgb(226,214,214)]">
      <ImageBanner />
      <Marketlist />
      <Footer />
    </div>
  );
};
export default Home;
