import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout.jsx/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);
export default router;
