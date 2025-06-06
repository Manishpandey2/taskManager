import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";
import CreateTaskPage from "../pages/createTaskPage";
import SingleTaskPage from "../pages/singleTaskPage";
import UpdateTaskPage from "../pages/updateTaskPage";



const taskRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/create-task",
        element: <CreateTaskPage />
    },
    {
        path: "/single-task",
        element: <SingleTaskPage />
    },
    {
        path: "/update-task",
        element: <UpdateTaskPage />
    },
]);

export default taskRoute;