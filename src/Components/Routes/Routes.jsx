import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddToy from "../Pages/AddToy";
import ToyDetails from "../Pages/ToyDetails";
import Error from "../Pages/Error";
import Blog from "../Pages/Blog";
import AllToys from "../Pages/AllToys";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/toyDetails/:id",
        element: <PrivetRoute><ToyDetails /></PrivetRoute>,
        loader: ({ params }) =>
          fetch(`https://b7a11-toy-marketplace-server-side-dm-abdullah.vercel.app/toys/${params.id}`)
      },
      {
        path: "/addToy",
        element: <AddToy />,
      },
      {
        path: "/allToys",
        element: <AllToys/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/*",
        element: <Error/>
      },
    ]
  },
]);

export default router;
