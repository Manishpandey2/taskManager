import { RouterProvider } from "react-router-dom";
import "./App.css";
import taskRoute from "./routes/taskRoute";

function App() {
  return (
    <>
      <RouterProvider router={taskRoute} />
    </>
  );
}

export default App;
