import React from "react";
import Navbar from "../components/navbar";
import SingleTask from "../components/singleTask";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
