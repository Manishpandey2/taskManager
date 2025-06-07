import Navbar from "../components/navbar";
import SingleTask from "../components/singleTask";
import Footer from "../components/footer";

import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const fetchAllTAsk = async () => {
    const response = await axios.get("http://localhost:3000/task");
  };
  useEffect(() => {
    fetchAllTAsk();
  }, []);
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
