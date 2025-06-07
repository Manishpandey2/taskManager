import Navbar from "../components/navbar";
import SingleTask from "../components/singleTask";
import Footer from "../components/footer";

import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [task, setTask] = useState([]);
  const fetchAllTAsk = async () => {
    const response = await axios.get("http://localhost:3000/task");
    setTask(response.data.Task);
  };
  useEffect(() => {
    fetchAllTAsk();
  }, []);
  return (
    <>
      <Navbar />
      <div>
        {task.map((tasks) => {
          return <SingleTask task={tasks} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
